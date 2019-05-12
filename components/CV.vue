<template>
  <article class="section card has-text-centered">
    <p>
      The CV takes a little bit of time to appear, please be patient until I
      find a solution!
    </p>
    <iframe v-if="!loading" :src="url" frameborder="0" scrolling="no"></iframe>
  </article>
</template>

<script>
export default {
  name: 'CV',
  props: {
    loading: { type: Boolean }
  },
  data: function() {
    return {
      url:
        'https://onedrive.live.com/embed?cid=5FCCCDEE1FE9926F&resid=5FCCCDEE1FE9926F%212768&authkey=AC1ygRzymaTNDZY&em=2'
    }
  }
}
</script>
