<template lang="pug">
  .table-class
    q-table(
      :columns="columns"
      :data="data"
      :pagination.sync="pagination"
      @request="onRequest"
      :loading="isLoading"
      hide-bottom
    )
      template(#top-left)
        q-th
          h5.q-ma-none Star Wars
      template(#top-right="props")
        TableControl(v-bind="props" :setPage="setPage" :maxPages="maxPages")
</template>

<script>
import columns from './columns'
import TableControl from './TableControl'
import pagination from './pagination'
export default {
  name: 'tableComponent',
  components: { TableControl },
  mixins: [pagination],
  data () {
    return {
      columns,
      data: [],
      isLoading: false,
      maxPages: 0
    }
  }
}
</script>

<style scoped>

</style>
