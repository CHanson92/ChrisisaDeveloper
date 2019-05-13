<template>
  <section class="section">
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
        <li
          :class="[selected === 'Contact' ? 'is-active' : '']"
          @click="selected = tabs[2]"
        >
          <a>
            <span class="icon"> <font-awesome-icon icon="address-card" /> </span
            >Contact me
          </a>
        </li>
      </ul>
    </div>
    <section><component :is="selected"></component></section>
  </section>
</template>

<script>
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'
export default {
  name: 'Tabs',
  components: {
    About,
    Portfolio,
    Contact
  },
  data: function() {
    return {
      tabs: ['About', 'Portfolio', 'Contact'],
      selected: 'About'
    }
  }
}
</script>
