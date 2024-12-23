<template>
  <div class="result-container" :class="{'disabled': isLoading}">
    <h3 class="result-title">Результат выполнения:</h3>
    <pre class="result-output">{{ result }}</pre>
    <spinner v-if="isLoading" />
  </div>
</template>

<script>
import Spinner from './Spinner.vue';
export default {
  props: {
    result: String,
    isLoading: Boolean
  },
  components: {
    Spinner,
  }
};
</script>

<style scoped>
.result-container {
  margin-top: 20px;
  position: relative;

  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-container.disabled {
  filter: blur(2px);
  opacity: 0.7;
}

.result-title {
  font-size: 20px;
  color: #333;
  margin: 0;
}

.result-output {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #bb9e9e;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #333;
  font-size: 14px;
  margin: 0;
}

</style>
