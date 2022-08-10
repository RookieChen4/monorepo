<script setup lang="ts"></script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app,
body {
  width: 100%;
  height: 100vh;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
