<template>
  <form
    class="mt-12 flex w-full flex-col items-center gap-6 rounded-md p-6 align-middle border shadow-lg md:w-96 md:mx-auto"
    action="#"
    @submit.prevent="login"
  >
    <h1 className="text-xl font-bold">Log in to your account</h1>
    <div
      v-if="error"
      class="alert alert-danger"
    >
      {{ error }}
    </div>
    <div class="form-group row">
      <label for="email">Email</label>

      <div class="col-md-6">
        <input
          id="email"
          type="email"
          class="form-control"
          name="email"
          value
          required
          autofocus
          v-model="email"
        />
      </div>
    </div>

    <div class="form-group row">
      <label
        for="password"
        class="col-md-4 col-form-label text-md-right"
        >Password</label
      >

      <div class="col-md-6">
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          v-model="password"
        />
      </div>
    </div>

    <div class="form-group row mb-0">
      <div class="col-md-8 offset-md-4">
        <CustomButton
          :type="ButtonTypes.Info"
          class="btn btn-primary"
        >
          Login
        </CustomButton>
      </div>
    </div>
  </form>
  <p className="my-6 flex w-full items-center justify-center gap-1 md:w-auto">
    Don't have an account?
    <a
      href="/sign-up"
      class="text-blue-600 hover:underline"
    >
      Sign up!
    </a>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import CustomButton from '@/components/Common/CustomButton.vue'
import { ButtonTypes } from '@/types/types'

const email = ref('')
const password = ref('')
const error = ref(null)

const store = useStore()
const router = useRouter()

const login = async () => {
  try {
    await store.dispatch('logIn', {
      email: email.value,
      password: password.value,
    })
    router.push('/')
  } catch (err: any) {
    error.value = err.message
  }
}
</script>
