<template>
  <nuxt-link
    v-if="to"
    class="button"
    :to="to"
    :outlined="outlined"
    :rounded="rounded"
    :style="{
      'background-color':outlined? undefined:color,
      'border':`2px solid ${color}`,
      'color':textColor,
    }"
  >
    <Icon v-if="icon" class="icon" :icon="icon" />
    <p> <slot name="default" /></p>
  </nuxt-link>
  <button
    v-else
    class="button"
    :outlined="outlined"
    :rounded="rounded"
    :style="{
      'background-color':outlined? undefined:color,
      'border':`2px solid ${color}`,
      'color':textColor,
    }"
  >
    <Icon v-if="icon" class="icon" :icon="icon" />
    <p><slot name="default" /></p>
  </button>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  components: { Icon },

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
    },
    color: {
      type: String,
      default: 'transparent'
    },
    textColor: {
      type: String,
      default: 'inherit'
    },
    icon: {
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
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;

  border-radius: 5px;
  font-weight: 500;
  transition: transform 0.2s, box-shadow .5s;
  box-shadow: none;
}

.button[rounded]{
  border-radius: 999rem;
}

.button:hover{
  transform: translateY(-3px);
}

.button >*{
  vertical-align: middle;
}

.icon{
  font-size: 24px;
  margin-right: 7px;
}

p{
  margin: 0px;
  display: inline;
}
</style>
