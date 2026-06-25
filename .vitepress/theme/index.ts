import DefaultTheme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import PathRouter from './PathRouter.vue'
import DownloadButton from './DownloadButton.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DownloadButton),
    })
  },
  enhanceApp({ app }) {
    app.component('PathRouter', PathRouter)
  },
  setup() {
    const route = useRoute()

    async function renderMermaid() {
      if (typeof window === 'undefined') return

      const mermaid = (await import('mermaid')).default
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'neutral',
      })

      await nextTick()
      await mermaid.run({ querySelector: '.mermaid:not([data-processed="true"])' })
    }

    onMounted(renderMermaid)
    watch(() => route.path, renderMermaid)
  },
}
