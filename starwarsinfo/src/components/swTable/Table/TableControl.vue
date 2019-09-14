<template lang="pug">
  .table-control
    q-pagination(
      :max="maxPages"
      :direction-links="true"
      :value="pagination.page"
      @input="value => setPage('page', value)"
      :max-pages="5"
      color="grey-5"
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
