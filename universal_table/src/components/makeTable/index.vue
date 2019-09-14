<template lang="pug">
  .table
    q-table(
      row-key="id"
      :columns="columns"
      :data="data"
      hide-bottom
      :loading="isLoading"
      :pagination.sync="pagination"
      @request="onRequest"
    )
      template(#top-left)
        h6.q-ma-none Table title
      template(#top-right="props")
        TableControl(v-bind="props" :setPage="setPage")
      template(#header-cell="props")
        q-th(align="center") {{ props.col.label }}
</template>

<script>
import Vue from 'vue'
import TableControl from './TableControl'
import pagination from './pagination'
export default {
  props: {
    columns: Array
  },
  components: {
    TableControl
  },
  mixins: [pagination],
  data: () => ({
    data: [],
    isLoading: true
  }),
  created () {
    this.columns.forEach((item, index) => {
      if (item.width) {
        Vue.set(item, 'style', `width: ${item.width}px`)
      } else if (item.align) {
        Vue.set(item, 'align', item.align)
      } else if (item.classes) {
        Vue.set(item, 'classes', item.classes)
      }
    })
  }
}
</script>
