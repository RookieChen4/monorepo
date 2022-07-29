<template>
  <div>
    <h1 @click="goto('react')">登陆</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { setToken } from '../utils/auth';

const { push }= useRouter();

const goto = (path: string) => {
  setToken(String(Math.random()))
  push(path)
}
</script>
