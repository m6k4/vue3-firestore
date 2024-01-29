<template>
  <el-drawer
    v-model="isDrawerOpen"
    title="My profile"
  >
    <ProfileDrawerBody @closeDrawer="isDrawerOpen = false" />
  </el-drawer>
  <div class="TheHeader">
    <div class="TheHeader__navbar">
      <div class="TheHeader__logo">
        <i
          class="fa fa-tasks"
          aria-hidden="true"
        ></i>
      </div>
      <div class="TheHeader__navbar-buttons">
        <router-link to="/">Home</router-link>
        <i
          class="fa fa-user icon-button"
          aria-hidden="true"
          @click="isDrawerOpen = true"
        ></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ProfileDrawerBody from '@/components/Profile/ProfileDrawerBody.vue'

const isDrawerOpen = ref(false)
</script>
<style lang="scss" scoped>
.TheHeader {
  width: 100%;
  display: flex;
  color: white;
  position: relative;
  height: 10vh;
  z-index: 2;
  background-color: #0e3b43;

  &__logo {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__navbar {
    padding: 0 5%;
    transition: 0.5s all ease-in;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1rem;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }

  &__navbar-buttons {
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
      color: white;
      text-decoration: none;
      position: relative;
    }

    .icon-button {
      font-size: 1.5rem;
      cursor: pointer;
      transition: 0.3s all ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      border-radius: 4px;
      background-color: white;
      bottom: -1px;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
}
</style>
