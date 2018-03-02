<template>
  <div id="app">
    <TheNavbar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  name: 'App',
  components: { TheNavbar },
  created () {
    this.$store.dispatch('GET_FIREBASE_AUTH_CHANGE')
  }
}
</script>

<style>
</style>
