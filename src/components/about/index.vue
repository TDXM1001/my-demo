<template>
  <div id="my-markdown" class="markdown-body">
    <vue-markdown :source="md"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      md: '## 这是一个标题',
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/github-markdown.css';
.markdown-body {
  max-width: 1000px;
  margin: 0 auto;
}
</style>