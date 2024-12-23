<template>
  <div class="container">
    <div class="header">
      <language-selector :languages="languages" v-model="selectedLanguage" />
      <run-button :disabled="runDisabled || !code.length" @click="runCode" />
    </div>

    <editor
      :data="code"
      :language="selectedLanguage"
      :options="MONACO_EDITOR_OPTIONS"
      @validate="handleValidation"
      @input="(value) => code = value"
    />

    <result-display :isLoading="isResultLoading" :result="result" />
  </div>
</template>

<script>
import LanguageSelector from './components/LanguageSelector.vue';
import RunButton from './components/RunButton.vue';
import Editor from './components/Editor.vue';
import ResultDisplay from './components/ResultDisplay.vue';
import { runCodeService } from './services/runCodeService.js';
import { removeSpacesOutsideString } from './utils/index.js'

export default {
  components: {
    LanguageSelector,
    RunButton,
    Editor,
    ResultDisplay,
  },
  data() {
    return {
      selectedLanguage: 'javascript',
      languages: ['go', 'python', 'javascript'],
      code: "console.log('Hello World');",
      result: null,
      MONACO_EDITOR_OPTIONS: {
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
      },
      isResultLoading: false,
      runDisabled: false,
    };
  },
  methods: {
    handleValidation(markers) {
      this.runDisabled = markers.length > 0;
    },
    async runCode() {
      this.isResultLoading = true
      this.runDisabled = true
      setTimeout(async () => {
        try {
            let spacesRemovedCode = removeSpacesOutsideString(this.code);

            if (this.selectedLanguage === 'javascript' && !spacesRemovedCode.endsWith(';')) {
              spacesRemovedCode += ';'
            }

            const output = await runCodeService(spacesRemovedCode, this.selectedLanguage);
            this.result = output;
        } catch (error) {
          this.result = 'Ошибка выполнения кода';
        } finally {
          this.isResultLoading = false
          this.runDisabled = false
        }
      }, 2500)
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Header section with dropdown and button */
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

/* Monaco editor style */
.editor {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
