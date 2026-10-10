# 文档站

```bash
npm install
npm run dev
npm run build
```

`npm run dev` 启动本地预览，`npm run build` 生成静态站点到输出目录。

站点为中英双语。中文位于根路径，英文位于 `en/`，右上角可切换语言。手写页面按目录对应：`guide/` 对 `en/guide/`，其余章节同理。英文页面尚未翻译时，内容暂为中文原文副本。

`api-reference/` 与 `en/api-reference/` 由 Doxygen XML 生成，`bindings/c/` 与 `en/bindings/c/` 同理，不在手写文档中修改。手写页面位于 `guide`、`core`、`widgets`、`styling`、`window` 和 `advanced`。

生成 4 套 API 页面（C++/C × 中文/英文）：

```bash
cmake --build <builddir> --target doc-site
```

单独生成 Doxygen XML 时使用 `doc` 目标。也可以手动调用转换脚本：

```bash
python scripts/doxygen2vitepress.py <builddir>/doxygen/xml docs/api-reference
python scripts/doxygen2vitepress.py <builddir>/doxygen/xml docs/en/api-reference --out-lang en
python scripts/doxygen2vitepress.py <builddir>/doxygen-c/xml docs/bindings/c --lang c
python scripts/doxygen2vitepress.py <builddir>/doxygen-c/xml docs/en/bindings/c --lang c --out-lang en
```
