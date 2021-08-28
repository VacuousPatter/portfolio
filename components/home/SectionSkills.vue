<template>
  <section>
    <Title title="Skills" />

    <div class="container">
      <div class="card">
        <div class="card-title">
          <h3>Formação</h3>
        </div>
        <div class="card-content">
          <FormacaoItem v-for="(course,i) in courses" :key="i" :course="course" />
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <h3>Skills</h3>
        </div>
        <div class="card-content">
          <SkillGroup v-for="(group,i) in skills" :key="i" :skills="group" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../../components/templates/Title.vue'
import FormacaoItem from './skills/FormacaoItem.vue'
import SkillGroup from './skills/SkillGroup.vue'
import courses from '~/assets/data/courses.json'
import skills from '~/assets/data/skills.json'

export default {
  components: { Title, FormacaoItem, SkillGroup },

  data () {
    return {
      courses,
      skills,

      showAnimation: {
        formacao: false,
        skills: false
      }
    }
  }
}
</script>

<style scoped>
section{
  padding: 50px 25px;
}

.container{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 37.5px;
}

.card{
  padding: 25px;
  margin: 12.5px;
  box-sizing: border-box;
  border: 2px solid var(--secondary);
  border-radius: 5px;
  background: rgba(0,0,0,.15);
  width: 515px;
  align-self: stretch;
  transition: transform 0.3s, border-color 0.3s;
}

.card:hover{
  transform: translateY(-5px);
  border-color: var(--primary);
}

.card .card-title{
  font-size: 24px;
  font-weight: bold;
}

.card .card-title h3{
  margin: 0px;
}

.card-content{
  max-height: 60vh;
  overflow: auto;
}

.card-content::-webkit-scrollbar {
  width: 6px;
}

.card-content::-webkit-scrollbar-track {
  background: var(--background2);
  border-radius: 999rem;
}

.card-content::-webkit-scrollbar-thumb {
  background-color: var(--text-secondary);
  border-radius: 999rem;
}
</style>
