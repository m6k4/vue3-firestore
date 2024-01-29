<template>
  <div class="ThePlatform">
    <TheHeader />
    <div class="ThePlatform__content">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/Platform/TheHeader.vue'
import TheFooter from '@/components/Platform/TheFooter.vue'
</script>

<style scoped lang="scss">
.ThePlatform {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &__content {
    flex: 1;
    overflow: auto;
    padding: 0 10%;
  }
}
</style>
