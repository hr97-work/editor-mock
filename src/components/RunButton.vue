<template>
  <button :disabled="disabled" @click="run" class="run-button">
    RUN
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },
  methods: {
    run() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.run-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.run-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.run-button:not(:disabled):hover {
  background-color: #218838;
}
</style>
