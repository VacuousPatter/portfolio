<template>
  <header>
    <div class="header-wrapper">
      <div class="name">
        <nuxt-link class="link-name" to="/">
          <span>
            <strong>Maycon</strong> Pinto
          </span>
        </nuxt-link>
      </div>
      <button class="menu" @click="navOpen=!navOpen">
        <Icon icon="mdi:menu" />
      </button>
      <nav ref="nav">
        <div class="nav-wrapper">
          <TemplatesNavItem to="/sobre" @closeNav="closeNav">
            Sobre
          </TemplatesNavItem>
          <TemplatesNavItem to="/servicos" @closeNav="closeNav">
            Serviços
          </TemplatesNavItem>
          <TemplatesNavItem to="/conhecimentos" @closeNav="closeNav">
            Conhecimentos
          </TemplatesNavItem>
          <TemplatesNavItem to="/projetos" @closeNav="closeNav">
            Projetos
          </TemplatesNavItem>
          <TemplatesNavItem to="/contato" @closeNav="closeNav">
            Contato
          </TemplatesNavItem>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  components: { Icon },

  data () {
    return {
      navOpen: false
    }
  },

  watch: {
    navOpen (val) {
      const element = this.$refs.nav
      if (val) {
        const sectionHeight = element.scrollHeight
        element.style.height = `${sectionHeight}px`

        function onTransitionEnd (e) {
          element.removeEventListener('transitionend', onTransitionEnd)

          element.style.height = 'auto'
        }

        element.addEventListener('transitionend', onTransitionEnd)

        element.setAttribute('data-collapsed', 'false')
      } else {
        const sectionHeight = element.scrollHeight
        requestAnimationFrame(function () {
          element.style.height = sectionHeight + 'px'

          requestAnimationFrame(function () {
            element.style.height = null
          })
        })

        element.setAttribute('data-collapsed', 'true')
      }
    }
  },

  methods: {
    closeNav () {
      this.navOpen = false
    }
  }
}
</script>

<style scoped>
header{
  background-color: #000814;
  color: #f0efeb;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.header-wrapper{
  padding: 15px 15px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 75vw;
}

header .name{
  font-size: 1.2rem;
}

header .name .link-name{
  text-decoration: none;
  color: inherit;
}

nav{
  margin-left: auto;
}

.nav-wrapper{
  display: flex;
  flex-flow: row nowrap;
}

button.menu{
  display: none;
  background: none;
  border: none;
  color: #FFC300;
  background: transparent;

  padding: 0px;
  font-size: 26px;
  box-sizing: border-box;
  border-radius: 999rem;
  padding: 5px;
  height: 36px;
  width: 36px;
  margin-left: auto;
}

@media (max-width:950px) {
  .header-wrapper{
    padding: 12px 15px;
    flex-flow: row wrap;
  }

  button.menu{
    display: block;
  }

  nav{
    height: 0px;
    transition: all 0.3s 0s;
    overflow: hidden;
  }

  .nav-wrapper{
    width: 75vw;
    flex-flow: column nowrap;
    padding: 10px 0px;
    padding-top: 10px;
  }
}
</style>
