<template>
  <a class="contato-wrapper" target="_blank" :href="urlProfile">
    <div class="content">
      <div
        class="icon"
        :style="{
          background:contato.layout.iconBackgroundColor
        }"
      >
        <Icon :icon="contato.icon" />
      </div>
      <div class="details">
        <p class="social-name">
          {{ contato.name }}
        </p>
        <p class="social-username">
          {{ contato.usernameDisplay||contato.username }}
        </p>
      </div>
    </div>
    <div
      class="border-bottom"
      :style="{
        background:contato.layout.borderBottomColor
      }"
    />
  </a>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  components: { Icon },

  props: {
    contato: {
      type: Object,
      required: true
    }
  },

  computed: {
    urlProfile () {
      return this.contato.url.replace('%%username%%', this.contato.username)
    }
  }
}
</script>

<style scoped>
.contato-wrapper{
    background: var(--background2);
    border-radius: 5px 5px 0px 0px;
    max-width: 400px;
    width: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: transform 0.3s;
    text-decoration: none;
    color: inherit;
}

.contato-wrapper:hover{
    transform: translateY(-5px);
}

.content{
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.contato-wrapper:not(:last-child){
    margin-bottom: 20px;
}

.border-bottom{
    height: 1px;
    width: 100%;
}

.icon{
    font-size: 36px;
    padding: 0px;
    border-radius: 10px;
    height: 46px;
    width: 46px;
    text-align: center;
}

.details{
    margin-left: 10px;
}

.social-name,
.social-username{
    margin: 0px;
}

.social-name{
    font-weight: bold;
}

.social-username{
    text-decoration: none;
    color: var(--text-secondary);
}
</style>
