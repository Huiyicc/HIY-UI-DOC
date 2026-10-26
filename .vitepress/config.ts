import { defineConfig } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

function loadSidebar(path: string, fallback: unknown) {
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf-8')) : fallback
}

const apiSidebar = loadSidebar(resolve(__dirname, '../api-reference/_sidebar.json'), [
  { text: 'API 参考', items: [{ text: '索引', link: '/api-reference/' }] },
])

const cSidebar = loadSidebar(resolve(__dirname, '../bindings/c/_sidebar.json'), [
  { text: 'C 绑定', items: [{ text: '索引', link: '/bindings/c/' }] },
])

const enApiSidebar = loadSidebar(resolve(__dirname, '../en/api-reference/_sidebar.json'), [
  { text: 'API Reference', items: [{ text: 'Index', link: '/en/api-reference/' }] },
])

const enCSidebar = loadSidebar(resolve(__dirname, '../en/bindings/c/_sidebar.json'), [
  { text: 'C Binding', items: [{ text: 'Index', link: '/en/bindings/c/' }] },
])

const socialLinks = [{ icon: 'github', link: 'https://github.com/Huiyicc/HIY-UI' }]

export default defineConfig({
  title: 'Hiy-UI',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'Hiy-UI C++ API 与开发文档',
      themeConfig: {
        nav: [
          { text: '入门', link: '/guide/introduction' },
          { text: '核心', link: '/core/application' },
          { text: '组件', link: '/widgets/layout' },
          { text: '样式', link: '/styling/overview' },
          { text: '窗口', link: '/window/window-api' },
          { text: '平台', link: '/advanced/pal' },
          { text: '编译', link: '/build/' },
          { text: 'XML', link: '/xml/quick-start' },
          { text: 'C 绑定', link: '/bindings/c/' },
          { text: 'API', link: '/api-reference/' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '入门',
              items: [
                { text: '概览', link: '/guide/introduction' },
                { text: '快速开始', link: '/guide/quick-start' },
                { text: 'SDK 打包与接入', link: '/guide/sdk' },
                { text: '跨端任务与布局', link: '/guide/cross-platform' },
                { text: '架构', link: '/guide/architecture' },
              ],
            },
          ],
          '/core/': [
            {
              text: '核心',
              items: [
                { text: 'Application', link: '/core/application' },
                { text: '组件语法', link: '/core/syntax-design' },
                { text: 'Widget', link: '/core/widget' },
                { text: 'Container 与 Ref', link: '/core/container-ref' },
                { text: '事件', link: '/core/event-system' },
                { text: '状态与数据绑定', link: '/core/state-binding' },
                { text: '响应式布局', link: '/core/responsive' },
                { text: '国际化', link: '/core/i18n' },
                { text: '无障碍', link: '/core/accessibility' },
                { text: '常量', link: '/core/constants' },
                { text: '调试工具', link: '/core/debug' },
              ],
            },
          ],
          '/widgets/': [
            {
              text: '组件',
              items: [
                { text: '布局', link: '/widgets/layout' },
                { text: '列表详情', link: '/widgets/list-detail' },
                { text: '基础组件', link: '/widgets/basic' },
                { text: '导航组件', link: '/widgets/navigation' },
                { text: '复合组件', link: '/widgets/advanced' },
                { text: '终端', link: '/widgets/terminal' },
                { text: '视频播放', link: '/widgets/video' },
                { text: '自绘组件', link: '/widgets/custom-drawing' },
                { text: '着色器', link: '/widgets/shader' },
                { text: 'DrawCtx', link: '/widgets/draw-ctx' },
                { text: '动画', link: '/widgets/animation' },
              ],
            },
          ],
          '/styling/': [
            {
              text: '样式',
              items: [
                { text: '概览', link: '/styling/overview' },
                { text: 'Style', link: '/styling/style' },
                { text: 'StyleSet', link: '/styling/style-set' },
                { text: 'Theme', link: '/styling/theme' },
                { text: '过渡', link: '/styling/transition' },
                { text: '效果', link: '/styling/effects' },
                { text: 'Shape', link: '/styling/shape' },
              ],
            },
          ],
          '/window/': [
            {
              text: '窗口',
              items: [
                { text: '创建与配置', link: '/window/window-api' },
                { text: '无边框窗口', link: '/window/borderless' },
                { text: '多窗口', link: '/window/multi-window' },
                { text: '系统托盘', link: '/window/tray' },
                { text: '桌面滚动', link: '/window/scrolling' },
              ],
            },
          ],
          '/advanced/': [{ text: '平台', items: [{ text: 'PAL', link: '/advanced/pal' }] }],
          '/build/': [
            {
              text: '编译',
              items: [
                { text: '总览', link: '/build/' },
                { text: '编译参数', link: '/build/options' },
                { text: 'SDK 打包与接入', link: '/guide/sdk' },
                { text: 'C++ 画廊', link: '/build/cpp-gallery' },
                { text: 'C 画廊', link: '/build/c-gallery' },
                { text: '安卓', link: '/build/android' },
              ],
            },
          ],
          '/xml/': [
            {
              text: 'XML 布局',
              items: [
                { text: '快速上手', link: '/xml/quick-start' },
                { text: '数据绑定与命令', link: '/xml/data-binding' },
                { text: '自定义组件', link: '/xml/custom-widget' },
                { text: 'Schema 与离线校验', link: '/xml/schema-tools' },
                { text: 'C 绑定与注册', link: '/xml/c-binding' },
              ],
            },
          ],
          '/bindings/c/': cSidebar,
          '/api-reference/': apiSidebar,
        },
        search: { provider: 'local' },
        socialLinks,
        outline: { label: '本页', level: [2, 3] },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '更新于' },
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Hiy-UI C++ API and development documentation',
      themeConfig: {
        nav: [
          { text: 'Getting Started', link: '/en/guide/introduction' },
          { text: 'Core', link: '/en/core/application' },
          { text: 'Widgets', link: '/en/widgets/layout' },
          { text: 'Styling', link: '/en/styling/overview' },
          { text: 'Window', link: '/en/window/window-api' },
          { text: 'Platform', link: '/en/advanced/pal' },
          { text: 'Build', link: '/en/build/' },
          { text: 'XML', link: '/en/xml/quick-start' },
          { text: 'C Binding', link: '/en/bindings/c/' },
          { text: 'API', link: '/en/api-reference/' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Overview', link: '/en/guide/introduction' },
                { text: 'Quick Start', link: '/en/guide/quick-start' },
                { text: 'SDK Packaging and Integration', link: '/en/guide/sdk' },
                { text: 'Cross-Platform Tasks & Layout', link: '/en/guide/cross-platform' },
                { text: 'Architecture', link: '/en/guide/architecture' },
              ],
            },
          ],
          '/en/core/': [
            {
              text: 'Core',
              items: [
                { text: 'Application', link: '/en/core/application' },
                { text: 'Widget Syntax', link: '/en/core/syntax-design' },
                { text: 'Widget', link: '/en/core/widget' },
                { text: 'Container and Ref', link: '/en/core/container-ref' },
                { text: 'Events', link: '/en/core/event-system' },
                { text: 'State and Data Binding', link: '/en/core/state-binding' },
                { text: 'Responsive Layout', link: '/en/core/responsive' },
                { text: 'Internationalization', link: '/en/core/i18n' },
                { text: 'Accessibility', link: '/en/core/accessibility' },
                { text: 'Constants', link: '/en/core/constants' },
                { text: 'Debug Tools', link: '/en/core/debug' },
              ],
            },
          ],
          '/en/widgets/': [
            {
              text: 'Widgets',
              items: [
                { text: 'Layout Widgets', link: '/en/widgets/layout' },
                { text: 'List Detail', link: '/en/widgets/list-detail' },
                { text: 'Basic Widgets', link: '/en/widgets/basic' },
                { text: 'Navigation Widgets', link: '/en/widgets/navigation' },
                { text: 'Composite Widgets', link: '/en/widgets/advanced' },
                { text: 'Terminal', link: '/en/widgets/terminal' },
                { text: 'Video Playback', link: '/en/widgets/video' },
                { text: 'Custom Drawing', link: '/en/widgets/custom-drawing' },
                { text: 'Shader', link: '/en/widgets/shader' },
                { text: 'DrawCtx', link: '/en/widgets/draw-ctx' },
                { text: 'Animation', link: '/en/widgets/animation' },
              ],
            },
          ],
          '/en/styling/': [
            {
              text: 'Styling',
              items: [
                { text: 'Styling Overview', link: '/en/styling/overview' },
                { text: 'Style', link: '/en/styling/style' },
                { text: 'StyleSet', link: '/en/styling/style-set' },
                { text: 'Theme', link: '/en/styling/theme' },
                { text: 'Style Transitions', link: '/en/styling/transition' },
                { text: 'Visual Effects', link: '/en/styling/effects' },
                { text: 'Shape', link: '/en/styling/shape' },
              ],
            },
          ],
          '/en/window/': [
            {
              text: 'Window',
              items: [
                { text: 'Window Creation and Configuration', link: '/en/window/window-api' },
                { text: 'Borderless Window', link: '/en/window/borderless' },
                { text: 'Multi-Window', link: '/en/window/multi-window' },
                { text: 'System Tray', link: '/en/window/tray' },
                { text: 'Desktop Scrolling', link: '/en/window/scrolling' },
              ],
            },
          ],
          '/en/advanced/': [
            {
              text: 'Platform',
              items: [{ text: 'Platform Abstraction Layer', link: '/en/advanced/pal' }],
            },
          ],
          '/en/build/': [
            {
              text: 'Build',
              items: [
                { text: 'Build Overview', link: '/en/build/' },
                { text: 'Build Options', link: '/en/build/options' },
                { text: 'SDK Packaging and Integration', link: '/en/guide/sdk' },
                { text: 'C++ Gallery', link: '/en/build/cpp-gallery' },
                { text: 'C Gallery', link: '/en/build/c-gallery' },
                { text: 'Android', link: '/en/build/android' },
              ],
            },
          ],
          '/en/xml/': [
            {
              text: 'XML Layout',
              items: [
                { text: 'XML Layout Quick Start', link: '/en/xml/quick-start' },
                { text: 'Resources, Data Binding and Commands', link: '/en/xml/data-binding' },
                { text: 'Custom XML Widgets', link: '/en/xml/custom-widget' },
                { text: 'Schema and Offline Validation', link: '/en/xml/schema-tools' },
                { text: 'C Binding and XML Registration', link: '/en/xml/c-binding' },
              ],
            },
          ],
          '/en/bindings/c/': enCSidebar,
          '/en/api-reference/': enApiSidebar,
        },
        search: { provider: 'local' },
        socialLinks,
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Updated' },
        darkModeSwitchLabel: 'Theme',
        sidebarMenuLabel: 'Outline',
        returnToTopLabel: 'Back to top',
      },
    },
  },
})
