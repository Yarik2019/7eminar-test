<template>
  <div>
    <Header />
    <intro />
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header.vue';
import intro from './components/intro.vue';
export default {
  name: 'vueApp',
  components: {
    Header,
    intro,
  }
}
</script>
<style>
@import url('./assets/css/style.css');

</style>
