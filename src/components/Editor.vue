<template>
  <vue-monaco-editor
    height="500px"
    width="100%"
    v-model="code"
    :language="language"
    theme="vs-dark"
    :options="editorOptions"
    @validate="handleValidation"
    class="editor"
  />
</template>

<script>
import { VueMonacoEditor } from '@guolao/vue-monaco-editor';

export default {
  components: { VueMonacoEditor },
  props: {
    data: String,
    language: String,
    editorOptions: Object,
  },
  data() {
    return {
      code: this.data,
    };
  },
  methods: {
    handleValidation(markers) {
      this.$emit('validate', markers);
    },
  },
  watch: {
    code(newCode) {
      this.$emit('input', newCode);
    },
  },
};
</script>

<style scoped>
.editor {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}
</style>

