<template>
  <section>
    <Title title="Serviços" />
    <div class="container">
      <HomeServiceCard v-for="(service,i) in services" :key="i" :service="service">
        <img v-if="i===0" class="astronauta-business" src="~/assets/images/astronautas/astronauta-business.png" alt="Astronauta Business" height="150">
      </HomeServiceCard>
    </div>
  </section>
</template>

<script>
import Title from '../../components/templates/Title.vue'
export default {
  components: { Title },

  data () {
    return {
      services: [
        {
          name: 'Desenvolvimento WEB',
          description: 'Gosto de codificar coisas do zero e ver as ideias ganhando vida no navegador.',
          icon: 'mdi:code-braces',
          lists: [
            {
              title: 'Fluente em:',
              items: [
                [
                  'CSS',
                  'HTML',
                  'Javascript',
                  'Node.js',
                  'Nuxt.js',
                  'Sass',
                  'Typescript',
                  'Vue.js'
                ]
                  .join(', ')
              ]
            }
          ]
        },
        {
          name: 'ChatBot',
          description: 'Automatize seus canais de comunicação ou lives com chatbots.',
          icon: 'mdi:robot',
          lists: [
            {
              title: 'Disponíveis para',
              items: [
                [
                  'Booyah', 'Discord', 'Telegram', 'Twitch'
                ]
                  .join(', ')
              ]
            }
          ]
        },
        {
          name: 'Web Scraping',
          description: 'Colete automaticamente dados de websites e obtenha-os de forma organizada.',
          icon: 'mdi:database-search',
          lists: []
        }
      ]
    }
  }
}
</script>

<style scoped>
section{
  padding: 50px 25px;
}

.container{
  margin-top: 35px;
  display: flex;
  flex-flow: row wrap;
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

.astronauta-business{
  position: absolute;
  top: -165px;
  left: -20px;
}

@media (max-width:550px) {
  .astronauta-business{
    height: 100px;
    top: -115px;
  }
}
</style>
