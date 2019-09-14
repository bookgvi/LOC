<template lang="pug">
  .table
    q-table(
      :columns="columns"
      :data="data"
      hide-bottom
    )
      template(#top-left)
        h6.q-ma-none Table title
      template(#top-right="props")
        q-select(:options="props.pagination.page" :value="props.pagination.page" outlined dense)
      template(#header-cell="props")
        q-th {{ props.col.label }}
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    data: Array,
    columns: Array
  },
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
