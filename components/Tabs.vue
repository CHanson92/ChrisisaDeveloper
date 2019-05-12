<template>
  <section class="section">
    <div class="tabs is-boxed is-fullwidth is-large">
      <ul>
        <li>
          <a @click="selected = tabs[0]">
            <span class="icon"> <font-awesome-icon icon="book-reader" /> </span
            >About me
          </a>
        </li>
        <li>
          <a @click="selected = tabs[1]">
            <span class="icon"> <font-awesome-icon icon="file" /> </span>CV
          </a>
        </li>
        <li>
          <a @click="selected = tabs[2]">
            <span class="icon"> <font-awesome-icon icon="laptop-code" /> </span
            >Portfolio
          </a>
        </li>
        <li>
          <a @click="selected = tabs[3]">
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
import CV from './CV.vue'
import Portfolio from './Portfolio.vue'
import Contact from './Contact.vue'
export default {
  name: 'Tabs',
  components: {
    About,
    CV,
    Portfolio,
    Contact
  },
  data: function() {
    return {
      tabs: ['About', 'CV', 'Portfolio', 'Contact'],
      selected: 'About'
    }
  }
}
</script>
