<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.spinner-container {
  position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: fit-content;
  top: 20px;
}

.spinner {
  border: 4px solid #f3f3f3; /* Light gray */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

