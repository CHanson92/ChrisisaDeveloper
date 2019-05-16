<template>
  <section class="tabsection section">
    <div class="tabs is-boxed is-fullwidth is-large animated slideInLeft">
      <ul>
        <li
          :class="[selected === 'Portfolio' ? 'is-active' : '']"
          @click="selected = tabs[1]"
        >
          <a>
            <span class="icon"> <font-awesome-icon icon="laptop-code" /> </span
            >Portfolio
          </a>
        </li>
        <li
          :class="[selected === 'About' ? 'is-active' : '']"
          @click="selected = tabs[0]"
        >
          <a>
            <span class="icon"> <font-awesome-icon icon="book-reader" /> </span
            >About Me
          </a>
        </li>
      </ul>
    </div>
    <section>
      <component :is="selected"></component>
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
      selected: 'Portfolio'
    }
  }
}
</script>
