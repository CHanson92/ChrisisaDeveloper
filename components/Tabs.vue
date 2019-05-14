<template>
  <section class="tabsection section animated fadeInUp">
    <div class="tabs is-boxed is-fullwidth is-large">
      <ul>
        <li
          :class="[selected === 'About' ? 'is-active' : '']"
          @click="selected = tabs[0]"
        >
          <a>
            <span class="icon"> <font-awesome-icon icon="book-reader" /> </span
            >About Me
          </a>
        </li>
        <li
          :class="[selected === 'Portfolio' ? 'is-active' : '']"
          @click="selected = tabs[1]"
        >
          <a>
            <span class="icon"> <font-awesome-icon icon="laptop-code" /> </span
            >Portfolio
          </a>
        </li>
      </ul>
    </div>
    <section>
      <transition name="fade">
        <component :is="selected"></component>
      </transition>
    </section>
  </section>
</template>

<script>
import About from './About.vue'
import Portfolio from './Portfolio.vue'
export default {
  name: 'Tabs',
  components: {
    About,
    Portfolio
  },
  data: function() {
    return {
      tabs: ['About', 'Portfolio'],
      selected: 'About'
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  opacity: 0 1.5;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
