<template>
  <section>
    <Title title="Sobre Mim" />

    <img :class="{show:animations.showAstronautaLendo}" class="astronauta-lendo" height="150" src="~/assets/images/astronautas/astronauta-lendo.png" alt="">

    <div class="content">
      <div class="picture" :class="{show:animations.showPicture}">
        <img src="~/assets/images/eu-sobre-mim.png" alt="">
      </div>
      <div class="about-me" :class="{show:animations.showAboutMe}">
        <article>
          <h3>
            Olá, tudo bem?
          </h3>
          <p>
            Olá! Me chamo Maycon e gosto de criar coisas para a internet, principalmente websites.
            Meu interesse por desenvolvimento WEB começou em 2018 quando eu precisava de um site para um chatbot do discord que eu tinha desenvolvido, e desde então eu venho me aprimorando.
          </p>

          <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>

          <ul>
            <li>JavaScript (ES6+)</li>
            <li>Mysql</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Vue.js</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../templates/Title.vue'

export default {
  components: { Title },

  data () {
    return {
      animations: {
        showAboutMe: false,
        showPicture: false,
        showAstronautaLendo: false
      },
      intervalCheckScroll: null
    }
  },

  beforeDestroy () {
    if (this.intervalCheckScroll) {
      clearInterval(this.intervalCheckScroll)
    }
  },

  mounted () {
    this.intervalCheckScroll = setInterval(() => {
      const scroll = document.querySelector('html').scrollTop

      const astronautaLendo = this.$el.querySelector('.astronauta-lendo').offsetTop
      if (scroll >= (astronautaLendo + 50)) {
        this.animations.showAstronautaLendo = true
      }

      const aboutMeHeight = this.$el.querySelector('.about-me').offsetTop
      if (scroll >= (aboutMeHeight + 50)) {
        this.animations.showAboutMe = true
      }

      const pictureHeight = this.$el.querySelector('.picture').offsetTop
      if (scroll >= (pictureHeight + 50)) {
        this.animations.showPicture = true
      }
    }, 1000)
  }
}
</script>

<style scoped>
section{
  padding: 50px 25px;
  position: relative;
}

@keyframes AnimationAstronautaLendo {
  0%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0);
  }
}

.astronauta-lendo{
  position: absolute;
  top: 100px;
  right: 50px;
  animation: AnimationAstronautaLendo 1s 0s infinite alternate;
  opacity: 0;
  transition: opacity 0.5s;
}

.astronauta-lendo.show{
  opacity: 1;
}

.content{
  margin-top: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.picture{
  opacity: 0;
  transform: translateX(-25px);
  transition: all 0.3s;
}
.picture.show{
  opacity: 1;
  transform: translate(0);
}

.picture > img{
  height: 500px;
}

.about-me{
  margin-left: 50px;
  max-width: 791px;
  transform: translateY(25px);
  opacity: 0;
  transition: 0.3s;
}
.about-me.show{
  transform: translate(0);
  opacity: 1;
}

h3{
  font-weight: bold;
  font-size: 36px;
  margin: 0px 0px 10px 0px;
}

article p{
  margin: 0px 0px 10px 0px;
}

article ul{
  margin-top: 25px;
  padding: 0px 50px;
  display: flex;
  flex-flow: row wrap;
  list-style-position: inside;
}

article ul li{
  display: list-item;
  width: 50%;
  box-sizing: border-box;
}

article ul li::marker{
  content: "> ";
  color: var(--primary);
}

@media (max-width:1050px) {
  .content{
    flex-flow: column nowrap;
    align-items: center;
  }

  .content .about-me{
    margin-left: 0;
  }
}

@media (max-width:680px) {
  .astronauta-lendo{
    right: 10px;
  }

  article ul{
    padding: 0 25px;
  }

  article ul li{
    width: 100%;
  }
}

@media (max-width:520px) {
  .astronauta-lendo{
    top: 550px;
    z-index: 1;
  }
}
</style>
