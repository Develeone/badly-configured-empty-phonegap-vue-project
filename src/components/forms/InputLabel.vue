<template>
  <p v-if="labelText">{{ labelText }}</p>
</template>

<script>
export default {
  name: 'InputLabel',
  props: ['labelText']
}
</script>

<style scoped lang="stylus">
  p
    margin-bottom 0
</style>
