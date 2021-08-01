<template>
  <section class="apresentation">
    <img class="astronauta-no-foguete" src="~/assets/images/astronautas/astronauta-no-foguete.png" height="150px" alt="">

    <div class="about-me">
      <div class="social">
        <SocialButton
          v-for="(social,i) in socials"
          :key="i"
          blank
          :animation-delay="i*100"
          :href="social.url.replace('%%username%%',social.username)"
          :social-name="social.name"
        >
          <Icon :icon="social.icon" />
        </SocialButton>
        <SocialButton to="/contato" social-name="Mais" :animation-delay="socials.length*100">
          <Icon icon="mdi:plus" />
        </SocialButton>
      </div>
      <h1 class="hello">
        Maycon J. Pinto
      </h1>
      <p class="description">
        Desenvolvedor WEB especialista em SPAs (Single-page applications) e chatbots para diversas plataformas como Twitch, Booyah e Discord.
      </p>
      <div class="actions">
        <Button rounded color="rgba(255,255,255,.15)" icon="mdi:folder-multiple-outline" to="/projetos">
          Meus Trabalhos
        </Button>
        <Button rounded color="var(--secondary)" icon="mdi:forum-outline" to="/contato">
          Fale Comigo
        </Button>
      </div>
    </div>
    <div class="picture">
      <img src="~/assets/images/eu-presentation.png" alt="Foto Maycon Jesus">
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue2'
import Socials from '~/assets/socials.json'

export default {
  components: { Icon },

  data: () => ({
    socials: Socials
  })
}
</script>

<style scoped>
@keyframes helloAnimation {
  0%{
    opacity: 0;
    transform: translateY(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes astronautaAnimation {
  0%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0);
  }
}

.astronauta-no-foguete{
  position: absolute;
  bottom: 50px;
  left: 50px;
  animation: astronautaAnimation 1s 0s infinite alternate;
}

.apresentation{
  height: calc(100vh - 60px);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
}

.apresentation .about-me{
  max-width: 600px;
  margin-right: 50px;
  display: flex;
  flex-flow: column nowrap;
}

.apresentation .about-me .social{
  display: flex;
  flex-flow: row wrap;
}

.apresentation .about-me .social > *:not(:first-child):not(:last-child){
  margin-left: 7px;
  margin-right: 7px;
}

.apresentation .about-me .social > *:last-child{
  margin-left: 7px;
}

.apresentation .about-me .social > *:first-child{
  margin-right: 7px;
}

.apresentation .about-me .hello{
  font-weight: bold;
  font-size: 48px;
  color: var(--text-primary);
  margin: 0px;
  margin-top: 20px;
  opacity: 0;
  animation: helloAnimation 1s .2s 1 forwards;
}

.apresentation .about-me .description{
  font-size: 18px;
  color: var(--text-primary);
  margin: 10px 0px 0px 0px;
  font-weight: 300;
  opacity: 0;
  animation: helloAnimation .75s 0.6s 1 forwards;
}

.apresentation .about-me .actions{
  margin-top: 30px;
  opacity: 0;
  animation: helloAnimation .75s 0.9s 1 forwards;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
}

.apresentation .about-me .actions > *{
  margin-top: 15px;
}

.apresentation .about-me .actions > *:not(:last-child){
  margin-right: 10px;
}

.apresentation .picture{
  height: calc(100% - 20px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.apresentation .picture{
  mask-image: linear-gradient(to bottom, #000000 97%,transparent);
}

.apresentation .picture img{
  height: 550px;
}

@media (max-width:1200px) {
  .apresentation{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: max-content;
    padding: 50px 25px 130px 25px;
  }

  .apresentation .about-me{
    order: 2;
    margin-top: 25px;
    margin-right: 0px;
  }

  .apresentation .picture{
    width: 100%;
    order: 1;
    margin-bottom: 0px;
  }

  .apresentation .picture img{
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 300px;
    height: auto;
  }
}

@media (max-width:650px) {
  .apresentation{
    padding-bottom: 200px;
  }

  .astronauta-no-foguete{
    bottom: 0px;
    left: calc(50% - 75px);
  }
}
</style>
