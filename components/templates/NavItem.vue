<template>
  <nuxt-link class="link" :to="to" :active="$route.path === to" @click.native="$emit('closeNav')">
    <slot name="default" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.link{
  text-decoration: none;
  color: #DCDAD0;
  font-weight: 500;
  margin: 0px 4px;
  padding: 0px 6px;
  position: relative;
  transition: transform 0.2s;
  position: relative;
}

.link:hover,
.link[active]{
transform: translateY(-2px);
}

.link[active]::after{
  content: "";
  display: block;
  height: 5px;
  width: 5px;
  background: #FFD60A;
  border-radius: 999rem;
  left: 50%;
  bottom: -5px;
  position: absolute;
  transform: translate(0px,-50%);
}

.link[active]{
  color: #FFD60A;
}

@media (max-width:950px) {
  .link{
    margin-left: 10px !important;
  }
  .link:first-child{
    margin-top: 0px;
  }
  .link:last-child{
    margin-bottom: 0px;
  }
  .link{
    margin: 5px 0px;
  }
  .link[active]::after{
    left: -5px;
    top: 50%;
  }
}
</style>
