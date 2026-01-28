<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-2xl">
      <div class="border-2 border-[#8b5cf6] rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-center mb-2 text-white">
          Contact Us
        </h2>
        <p class="text-center text-gray-300 mb-6">
          We'd love to hear from you. Send us your feedback!
        </p>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-white">Name</label>
            <input
              v-model="formData.name"
              type="text"
              class="w-full px-4 py-2 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-white">Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-2 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-white">Subject</label>
            <input
              v-model="formData.subject"
              type="text"
              class="w-full px-4 py-2 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-white">Message</label>
            <textarea
              v-model="formData.message"
              rows="6"
              class="w-full px-4 py-2 text-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          <button
            class="w-full py-3 border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-lg font-semibold hover:bg-[#8b5cf6] hover:text-white transition-colors"
          >
            Send Message
          </button>
        </div>

        <div class="mt-6 pt-6 border-t border-gray-300">
          <p class="text-center text-gray-600 mb-4">Or reach us directly:</p>
          <div class="space-y-2 text-center">
            <p class="text-gray-700">
              <span class="font-medium">Email:</span> Layinka@github.com
            </p>
            <p class="text-gray-700">
              <span class="font-medium">Phone:</span> +1 (555) 8008-1135
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>