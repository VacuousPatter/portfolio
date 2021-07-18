<template>
  <header>
    <vs-navbar v-model="active" fixed color="primary" text-white>
      <template #left>
        Maycon Pinto
        <!-- <img src="/logo2.png" alt=""> -->
      </template>
      <vs-navbar-item to="/" :active="$route.path=='/'">
        Início
      </vs-navbar-item>
      <vs-navbar-item to="/sobre" :active="$route.path=='/sobre'">
        Sobre
      </vs-navbar-item>
    </vs-navbar>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
height: 44px;
}
</style>
