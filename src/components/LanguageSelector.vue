<template>
  <div class="select-container">
    <select v-model="selectedLanguage" class="language-select">
      <option v-for="language in languages" :key="language" :value="language">
        {{ language }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    languages: Array,
    value: String,
  },
  computed: {
    selectedLanguage: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style scoped>
.language-select {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border 0.3s;
  width: 200px;
}
.language-select:hover {
  border-color: #007bff;
}
</style>
