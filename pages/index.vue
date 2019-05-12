<template>
  <section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">chrisisadeveloper</h1>
          <h2 class="subtitle">My developer website</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <tabs />
    </div>
    <footer>Made by Chris Hanson</footer>
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
