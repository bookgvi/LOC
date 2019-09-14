<template lang="pug">
  .table-control
    q-pagination(
      :max="maxPages"
      :value="pagination.page"
      @input="value => setPage('page', value)"
      :boundary-numbers="true"
      :max-pages="6"
    )
</template>

<script>
export default {
  name: 'TableControl',
  props: {
    pagination: Object,
    setPage: Function,
    maxPages: Number
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
