<template>
  <div class="skill-item">
    <div class="icon-wrapper">
      <Icon :icon="skill.icon" />
    </div>
    <div class="details-wrapper">
      <p>{{ skill.name }}</p>
      <div class="progress">
        <div class="line" :style="{width:skill.progress+'%'}" />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  components: { Icon },

  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.skill-item{
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.icon-wrapper{
  font-size: 36px;
  color: var(--text-secondary);
}

.details-wrapper{
  margin-left: 10px;
  width: 100%;
}

.progress{
  background: var(--background2);
  width: 100%;
  height: 7px;
  border-radius: 999rem;
}

.progress .line{
  background: var(--text-secondary);
  height: 7px;
  border-radius: 999rem;
}
</style>
