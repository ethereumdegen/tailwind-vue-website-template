<template>
  <div class="flex-shrink-0 py-12 text-center">
    <div>
      <router-link class="font-semibold text-gray-700 hover:underline" to="/">Home</router-link>
      <span class="mx-4 text-gray-500">|</span>

      <router-link class="font-semibold text-gray-700 hover:underline" to="/wiki">Wiki</router-link>
    </div>
    <div class="mt-2">
      <a href="https://github.com/admazzola/tailwind-vue-website-template" class="text-sm font-semibold text-gray-600 hover:underline">
        Source on GitHub
      </a>
    </div>
  </div>
</template>

  <script>

  export default {
    name: 'Footer',
    props: [ ],
    data() {
      return {

      }
    },
    methods: {

    }
  }
  </script>
