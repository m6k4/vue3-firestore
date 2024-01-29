<template>
  <div class="ProfileDrawerBody">
    <div
      class="ProfileDrawerBody__content"
      v-if="user.loggedIn"
    >
      <p>{{ user.data.email }}</p>
      <i
        class="fa fa-user-o icon-button"
        aria-hidden="true"
      ></i>
      <CustomButton
        :type="ButtonTypes.Info"
        class="btn btn-primary"
        @click="signOut"
      >
        Logout
      </CustomButton>
    </div>
    <div
      class="ProfileDrawerBody__content"
      v-else
    >
      <i
        class="fa fa-user-o icon-button"
        aria-hidden="true"
      ></i>
      <div class="ProfileDrawerBody__buttons">
        <CustomButton
          :type="ButtonTypes.Info"
          class="btn btn-primary"
          @click="logIn"
        >
          Log in
        </CustomButton>
        <CustomButton
          :type="ButtonTypes.Info"
          class="btn btn-primary"
          @click="signUp"
        >
          Sign up
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import CustomButton from '@/components/Common/CustomButton.vue'
import { ButtonTypes } from '@/types/types'
import { auth } from '@/firebase'

const emit = defineEmits(['closeDrawer'])

const store = useStore()
const router = useRouter()

auth.onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
})

const user = computed(() => {
  return store.getters.user
})

const logIn = () => {
  router.push('/log-in')
  emit('closeDrawer')
}

const signUp = () => {
  router.push('/sign-up')
  emit('closeDrawer')
}

const signOut = async () => {
  await store.dispatch('logOut')
  router.push('/')
}
</script>

<style lang="scss" scoped>
.ProfileDrawerBody {
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;

    .icon-button {
      font-size: 150px;
      margin-bottom: 40px;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}
</style>
