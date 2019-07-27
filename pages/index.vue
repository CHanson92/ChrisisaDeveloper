<template>
  <section>
    <section class="hero">
      <transition name="firstfade" appear>
        <div class="hero-body">
          <h1 class="title is-size-1">Chris Hanson</h1>
          <h2 class="subtitle is-size-4">Welcome to my website!</h2>
        </div>
      </transition>
    </section>
    <div>
      <transition name="secondfade" appear>
        <article class="container has-text-white">
          I am a passionate junior developer with a diploma in Web &amp; App
          Development from RED Academy. I have a degree in Mathematics from the
          University of Hertfordshire and a finance background in the medical
          device industry. I took a gamble when I switched careers, however it
          has paid off as I found a new love for coding. I have a thirst for
          knowledge, I am curious about everything and I love to make processes
          easier.
        </article>
      </transition>
      <transition name="thirdfade" appear>
        <tabs />
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.firstfade-enter,
.firstfade-leave-to {
  opacity: 0;
}

.firstfade-leave,
.firstfade-enter-to {
  opacity: 1;
}

.firstfade-enter-active,
.firstfade-leave-active {
  transition: opacity 0.5s;
}

.secondfade-enter,
.secondfade-leave-to {
  opacity: 0;
}

.secondfade-leave,
.secondfade-enter-to {
  opacity: 1;
}

.secondfade-enter-active,
.secondfade-leave-active {
  transition: opacity 0.5s 0.25s;
}

.thirdfade-enter,
.thirdfade-leave-to {
  opacity: 0;
}

.thirdfade-leave,
.thirdfade-enter-to {
  opacity: 1;
}

.thirdfade-enter-active,
.thirdfade-leave-active {
  transition: opacity 0.5s 0.5s;
}
</style>

<script>
import Tabs from '../components/Tabs.vue'
export default {
  components: {
    Tabs
  }
}
</script>
