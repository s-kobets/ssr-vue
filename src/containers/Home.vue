<template>
  <div class="title">
    {{msg}}
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'Hello SSR'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
