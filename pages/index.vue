<template>
  <section>
    <section class="hero animated slideInRight">
      <div class="hero-body">
        <h1 class="title is-size-1">Chris is a developer</h1>
        <h2 class="subtitle is-size-4">Welcome to my website!</h2>
      </div>
    </section>
    <div>
      <tabs />
    </div>
    <footer class="section">
      <p class="has-text-left">Can we have a break?</p>
      <a class href="mailto:chrisdhanson92@gmail.com">Email me</a>
    </footer>
  </section>
</template>

<script>
import Tabs from '../components/Tabs.vue'
export default {
  components: {
    Tabs
  }
}
</script>
