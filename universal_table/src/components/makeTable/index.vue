<template lang="pug">
  .table
    q-table(
      :columns="columns"
      :data="data"
    )
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    data: Array,
    columns: Array
  },
  created () {
    this.data.forEach((item, index) => {
      if (item.width) {
        Vue.set(this.columns[index], 'style', `width: ${item.width}px`)
        Vue.set(this.columns[index], 'align', item.align)
        Vue.set(this.columns[index], 'classes', item.classes)
      }
    })
    console.log(this.data)
  }
}
</script>
