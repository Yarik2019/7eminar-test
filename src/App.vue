<template>
  <div>
    <Header />
    <intro />
    <!-- <div class="bg-gray-white">
      <div class="container ">
        <LeftMenu/>
      </div>
    </div> -->
    <router-view />
  </div>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
</template>
<script>
import Header from './components/Header.vue';
import intro from './components/intro.vue';
// import LeftMenu from './components/LeftMenu.vue';
export default {
  name: 'vueApp',
  components: {
    Header,
    intro,
    // LeftMenu
  }
}
</script>
<style>
@import url('./assets/css/style.css');

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
