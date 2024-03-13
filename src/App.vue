<template>
  <div class="nav">
    <router-link to="/index">2</router-link>
    <router-link to="/user">5</router-link>
    <router-link to="/test">3</router-link>
    <router-link to="/Parent">4</router-link>
    <router-link to="/box">1</router-link>
  </div>

  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
  .nav{
    display: flex;
  }
</style>