<template>
  <div class="skill-group">
    <div class="head" @click="open=!open">
      {{ skills.groupName }}
      <Icon v-if="!open" class="icon" icon="mdi:chevron-down" />
      <Icon v-else class="icon" icon="mdi:chevron-up" />
    </div>
    <div class="body">
      <div class="body-padding">
        <SkillItem v-for="(skill,i) in skills.items" :key="i" :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'
import SkillItem from './SkillItem.vue'

export default {
  components: { Icon, SkillItem },

  props: {
    skills: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      open: false
    }
  },

  watch: {
    open (val) {
      const body = this.$el.querySelector('.body')
      if (val) {
        body.style.height = `${body.scrollHeight}px`
      } else {
        body.style.height = ''
      }
    }
  }
}
</script>

<style scoped>
.skill-group{
  margin-top: 15px;
  padding: 10px;
}

.head{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

.head .icon{
 font-size: 24px;
 color: var(--primary);
}

.body{
  overflow: hidden;
  height: 0px;
  transition: height 0.3s;
}

.body-padding{
  padding: 10px;
}
</style>
