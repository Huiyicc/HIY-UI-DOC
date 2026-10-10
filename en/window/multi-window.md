---
title: Multi-Window
---

# Multi-Window

`Application` can create multiple windows and manages their lifecycle.

```cpp
auto &main = createWindow("Main", {960, 640});
auto &details = createWindow("Details", {720, 520});

main.root(MainView{});
details.root(DetailsView{});
```

## Navigation

```cpp
navigate(details, Transition::SlideLeft);
goBack(Transition::SlideRight);
```

`navigate()` shows the window as a new page, and `goBack()` closes the current page and restores the previous one, keeping the previous page's content. Both record navigation history: navigating again to the current target adds no history entry, navigating to a page in the history truncates the entries after it, and truncation does not destroy pages. Reentrant calls during navigation are ignored.

On desktop, each window is an independent native window; on Android and FBDEV, windows share a display host, `navigate()` switches the active page, and only the active page receives input. Callers use the same interface and do not hold internal navigation stack objects.

## Back request

The page back button calls `requestBack()` on the window it belongs to. Each request ends once it is consumed by one step.

| Order | Behavior |
| --- | --- |
| 1 | Handles the topmost overlay; an overlay that disallows closing or is currently closing still blocks the back request from reaching the pages behind it |
| 2 | Cancels the current temporary input, closes the soft keyboard the platform has reported as shown, or exits input group editing state |
| 3 | Runs back handling along the current local branch from the innermost object outward; `onBackRequest()` on the same object runs before the component default behavior |
| 4 | Requests a page history back for the window |

The local branch uses the valid focus target; without focus it uses the most recently interacted or explicitly activated visible area. `ListDetail` returns from a single-column detail to the list, and `WindowFrame` closes an open drawer. Back itself does not commit or discard business drafts; the application can show a confirmation view through the [back handler](/en/core/event-system#back-request).

`requestBack()` returning `true` means the request was consumed; a canceled close request also counts as consumed. It returns `false` when there is nothing to go back to, the window is unavailable, or the same window is reentered. The application does not exit when the root page has nothing to handle. `goBack()` operates on the page history directly and does not run the local back flow above.

Request back on the owning window from a button:

```cpp
Button{}
    .text("返回")
    .init(parent)
    .onClick([target = &window] { target->requestBack(); });
```

Unconsumed Escape keys on the SDL backend, the Android system back key, and the Escape/Back keys of FBDEV input feed into the same flow. Key repeat does not re-issue the request; keys already consumed by input or shortcuts do not navigate. Other hosts can call `requestBack()` explicitly.

The C binding entry is `hiyui_win_request_back()`, declared in `<hiyui/c/app.h>`; it returns `1` when consumed and `0` for a null window or when nothing was handled. The local back handler uses `hiyui_wdg_on_back_request()`.

## Close

After a window is closed, the corresponding `Window&` becomes invalid. If an event callback captures a window reference, the callback must be guaranteed not to run after the window is destroyed.

After the last window closes, `Application::run()` returns. `Application::quit()` closes the whole application; when any window cancels its close request, that quit closes no windows.

## Screen adaptation

When a window moves across monitors, system DPI changes trigger `resolveContentScale()` to recompute. Layout uses logical sizes, and `scaled()` converts them to the current canvas size.
