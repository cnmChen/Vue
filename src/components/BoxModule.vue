<template>
  <div>
    <div class="container"></div>
    <div class="content"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  max-width: 100%; 
  background-color: #ccc; 
  height: 100vh; 
  max-height: 80vh; 
  overflow: auto; 
  transition: height 0.3s ease;
}

.content {
  max-width: 100%; 
  transition: height 0.3s ease; 
}

</style>