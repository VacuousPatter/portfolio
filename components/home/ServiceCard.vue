<template>
  <div class="card">
    <slot name="default" />

    <Icon class="icon" :icon="service.icon" />
    <h3>{{ service.name }}</h3>

    <p class="description">
      {{ service.description }}
    </p>

    <div v-for="(list,i) in service.lists" :key="i" class="list">
      <h4>{{ list.title }}</h4>
      <ul v-for="(item,ib) in list.items" :key="ib" class="list-center">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  components: { Icon },

  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card{
  border-radius: 5px;
  background: rgba(0,0,0,0.15);
  display: inline-block;
  width: 400px;
  padding: 30px 20px;
  box-sizing: border-box;
  margin: 25px;
  border: 2px solid var(--secondary);
  transition: transform 0.3s, border-color 0.3s;
}

.card:hover{
  transform: translateY(-5px);
  border-color: var(--primary);
}

.card >*{
  margin-top: 15px;
}

.icon{
  font-size: 64px;
  line-height: 64px;
  margin: 0px;
  color: var(--text-secondary);
  display: block;
  margin: 0 auto;
}

h3{
  text-align: center;
  vertical-align: middle;
  font-size: 24px;
  font-weight: bold;
}

.description{
 font-size: 16px;
 text-align: center;
}

.list{
  margin-top: 50px;
}

h4{
  font-weight: 500;
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
}

ul.list-center{
  list-style: none;
  padding: 0px;
}

ul.list-center li{
  text-align: center;
  padding: 0;
}
</style>
