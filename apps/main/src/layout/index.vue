<script setup lang="ts">
import SilderBar from '../components/SiderBar';
import watchRouter from '../utils/watchRouter';
const { routeMeta } = watchRouter();
</script>

<template>
  <nav class="navbar">
    <SilderBar />
  </nav>
  <main class="main">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :name="routeMeta?.appName" :url="routeMeta?.url" :baseroute="routeMeta?.baseroute" />
    </router-view>
  </main>
</template>

<style>
.navbar {
  width: 200px;
}
.main {
  flex: 1;
}
</style>
