<template lang="pug">
  .table
    q-table(
      :columns="columns"
      :data="data"
      hide-header
      hide-bottom
    )
      template(#header="props")
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
    console.log(this.data)
  }
}
</script>
