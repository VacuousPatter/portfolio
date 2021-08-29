<template>
  <section>
    <Title title="Contato" description="Fale comigo através desses meios de comunicação." />

    <div class="content-wrapper">
      <div class="img-me">
        <img src="~/assets/images/eu-presentation.png" alt="Foto Maycon Jesus">
      </div>
      <div class="contatos">
        <Contato v-for="(contato,i) in socials" :key="i" :contato="contato" />
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../components/templates/Title.vue'
import Contato from '../components/contato/Contato.vue'
const socials = require('../assets/data/socials-contato.json')

export default {
  components: { Title, Contato },

  data () {
    return {
      socials
    }
  },

  head: {
    title: 'Contato'
  }
}
</script>

<style scoped>
section{
  padding: 25px 25px 75px 25px;
}

.content-wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
}

.img-me img{
  mask-image: linear-gradient(to bottom, #000 97%, transparent);
  height: 500px;
}

.contatos{
  display: flex;
  flex-flow: column nowrap;
  max-width: 400px;
  width: 100%;
  margin-left: 50px;
}

@media (max-width:900px) {
  .content-wrapper{
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .contatos{
    margin-left: 0px;
    margin-top: 25px;
  }
}
</style>
