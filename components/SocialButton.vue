<template>
  <a
    v-if="href"
    :ref="buttonRef"
    class="button"
    :href="href"
    :icon="icon"
    :target="blank? '_blank':'_self'"
    :class="{'show':playAnimation}"
    @mouseenter="onHover()"
    @mouseleave="onLeaveHover()"
  >
    <div class="slot-icon">
      <slot name="default" />
    </div>
    <span :ref="labelRef" class="label">{{ socialName }}</span>
  </a>
  <nuxt-link
    v-else
    :ref="buttonRef+'router-link'"
    class="button"
    :to="to"
    :icon="icon"
    :class="{'show':playAnimation}"
    @mouseenter.native="onHover('router-link')"
    @mouseleave.native="onLeaveHover('router-link')"
  >
    <div class="slot-icon">
      <slot name="default" />
    </div>
    <span :ref="labelRef+'router-link'" class="label">{{ socialName }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    },
    to: {
      type: String,
      default: undefined
    },
    socialName: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    },
    animationDelay: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      labelRef: `label-${Date.now()}`,
      buttonRef: `button-${Date.now()}`,
      playAnimation: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.playAnimation = true
    }, this.animationDelay)
  },

  methods: {
    onHover (sufix = '') {
      const label = this.$refs[this.labelRef + sufix]
      const button = this.$refs[this.buttonRef + sufix]

      label.style.width = '0px'
      requestAnimationFrame(() => {
        label.style.width = `${label.scrollWidth}px`
        if (sufix === 'router-link') {
          button.$vnode.elm.style.width = `${label.scrollWidth + 38 + 4 + 10}px`
        } else {
          button.style.width = `${label.scrollWidth + 38 + 4 + 10}px`
        }
      })
    },
    onLeaveHover (sufix = '') {
      const label = this.$refs[this.labelRef + sufix]
      const button = this.$refs[this.buttonRef + sufix]

      label.style.width = null
      if (sufix === 'router-link') {
        button.$vnode.elm.style.width = null
      } else {
        button.style.width = null
      }
    }
  }
}
</script>

<style scoped>
.button{
  color: #F0EFEB;
  background: #000814;
  text-decoration: none;

  border: 2px solid #E6B566;
  border-radius: 999rem;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  height: 42px;
  width: 42px;
  font-size: 20px;

  transition: width 0.3s, transform .1s;
  opacity: 0;
  transform: translateX(-56px);
}

.slot-icon{
  height: 38px;
  width: 38px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

span.label{
  width: 0px;
  overflow: hidden;
  transition: all 0.3s;
  font-weight: 400;
  font-size: 1rem;
}

.button.show{
  opacity: 1;
  transform: translateX(0px);
}
</style>
