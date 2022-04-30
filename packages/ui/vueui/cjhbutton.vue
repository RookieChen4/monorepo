<script setup lang="ts">
defineProps<{ buttonName: string }>();

defineEmits<{ (e: 'clickButtom'): void }>();
</script>

<template>
  <button class="cjhbutton" @click="$emit('clickButtom')">{{ buttonName }}</button>
</template>

<style lang="scss" scoped>
.cjhbutton {
  color: violet;
}
</style>
