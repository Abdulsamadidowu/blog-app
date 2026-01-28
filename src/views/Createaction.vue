<script setup>
import { ref } from 'vue'

const isLogin = ref(true)
const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  name: ''
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="border-2 border-[#8b5cf6] rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-center  text-white mb-2">
          {{ isLogin ? 'Welcome Back' : 'Create Account' }}
        </h2>
        <p class="text-center text-white mb-6">
          {{ isLogin ? 'Sign in to continue' : 'Sign up to get started' }}
        </p>

        <div class="space-y-4">
          <div v-if="!isLogin">
            <label class="block text-sm font-medium mb-1 text-white">Name</label>
            <input
              v-model="formData.name"
              type="text"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-white">Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-white">Password</label>
            <input
              v-model="formData.password"
              type="password"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div v-if="!isLogin">
            <label class="block text-sm font-medium mb-1 text-white">Confirm Password</label>
            <input
              v-model="formData.confirmPassword"
              type="password"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
            />
          </div>

          <div v-if="isLogin" class="flex justify-end">
            <button type="button" class="text-sm text-blue-600 hover:underline text-white">
              Forgot password?
            </button>
          </div>

          <button
            class="w-full py-3 border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-lg font-semibold hover:bg-[#8b5cf6] hover:text-white transition-colors"
          >
            {{ isLogin ? 'Sign In' : 'Sign Up' }}
          </button>
        </div>

        <div class="mt-6 text-center">
          <p class="text-gray-600">
            {{ isLogin ? "Don't have an account? " : "Already have an account? " }}
            <button @click="isLogin = !isLogin" class="text-blue-600 font-semibold hover:underline">
              {{ isLogin ? 'Sign Up' : 'Sign In' }}
            </button>
          </p>
        </div>

        <div class="mt-6">
          <div class="relative">
            <div class="relative flex justify-center text-sm">
              <span class="px-2 my-2.5 text-white">Or continue with</span>
            </div>
          </div>

          <div class="mt-4">
            <button class="w-full py-2 px-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-white">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>