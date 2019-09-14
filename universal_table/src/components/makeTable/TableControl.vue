<template lang="pug">
  .tableControl
    .row.no-wrap.q-gutter-sm
      q-select(
        :value="pagination.rowsPerPage"
        @input="value => setPage('rowsPerPage', value)"
        :options="options"
        outlined
        dense
      )
      q-pagination(
        boundary-numbers=true
        :max-pages="pagesNumber"
        :max="pagesNumber"
        :value="pagination.page"
        @input="value => setPage('page', value)"
        color="grey-6"
      )
</template>

<script>
export default {
  name: 'TableControl',
  props: {
    pagination: Object,
    pagesNumber: Number,
    setPage: Function
  },
  data: () => ({
    options: [1, 2, 3, 5]
  })
}
</script>

<style scoped>

</style>
