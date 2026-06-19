<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()

const filename = computed(() => {
  const parts = page.value.relativePath.split('/')
  return parts[parts.length - 1] || 'document.md'
})

const hasContent = computed(() => typeof frontmatter.value.rawMarkdown === 'string')

function download() {
  const content = frontmatter.value.rawMarkdown
  if (!content) return
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename.value
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div v-if="hasContent" class="doc-download">
    <button class="doc-download__btn" type="button" @click="download" :title="`Download ${filename}`">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>Download Markdown</span>
    </button>
  </div>
</template>
