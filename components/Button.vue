<template>
  <nuxt-link v-if="to" class="button" :to="to" :outlined="outlined" :rounded="rounded">
    <slot name="default" />
  </nuxt-link>
  <button v-else class="button" :outlined="outlined" :rounded="rounded">
    <slot name="default" />
  </button>
</template>

<script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
.button{
  text-decoration: none;
  padding: 10px 15px;
  background: #001029;
  color: #F0EFEB;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  display: inline-block;

  border-radius: 5px;
  font-weight: 500;
  transition: transform 0.2s, box-shadow .5s;
  box-shadow: none;
}

.button[outlined]{
  border: 2px solid #E6B566;
}

.button[rounded]{
  border-radius: 999rem;
}

.button:hover{
  transform: translateY(-3px);
  box-shadow: 0px 0px 5px #E6B566;
}
</style>
