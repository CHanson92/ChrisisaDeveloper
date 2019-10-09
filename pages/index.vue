<template>
  <section>
    <section class="hero">
      <div class="hero-body">
        <h1 class="title is-size-1">Chris Hanson</h1>
        <h2 class="subtitle is-size-4">Welcome to my website!</h2>
      </div>
    </section>
    <div>
      <article class="container has-text-white">
        I am a passionate junior developer with a diploma in Web &amp; App
        Development from RED Academy. I have a 2:1 honours degree in Mathematics
        from the University of Hertfordshire and a finance background in the
        medical device industry. I have a thirst for knowledge, I am curious
        about everything and I love to make processes easier.
      </article>
      <tabs />
    </div>
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
