<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App', 
  components: {
    HelloWorld,
  },
  data() {
    return {
       msg: 'Hello Vue 3.0 + Vite',
    }
  },
  methods: {
    changeMsg() {
      var a = 123
      console.log('changeMsg', a)
      this.msg = 'Hello Vue 3.0 + Vite + TypeScript'
    },
  },
}
</script>
