<template lang="pug">
  .table-class
    q-table(
      :columns="columns"
      :data="persons"
      :pagination.sync="pagination"
      @request="onRequest"
      :loading="isLoading"
      hide-bottom
    )
      template(#top-left)
        h5.q-ma-none Star Wars
      template(#top-right="props")
        TableControl(v-bind="props" :setPage="setPage" :maxPages="maxPages")
      template(#header-cell="props")
        q-th.text-center.bg-grey-2(style="color: grey;") {{ props.col.label }}
      template(#body="props")
        TableRow(v-bind="props", :getPlanet="getPlanet")
</template>

<script>
import Vue from 'vue'
import columns from './columns'
import TableControl from './TableControl'
import pagination from './pagination'
import TableRow from './TableRow'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'tableComponent',
  components: { TableControl, TableRow },
  mixins: [pagination],
  data () {
    return {
      columns,
      data: [],
      isLoading: false,
      maxPages: 0
    }
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
    console.log(this.columns)
  },
  computed: {
    ...mapGetters([
      'persons'
    ])
  },
  methods: {
    ...mapActions([
      'getPersons',
      'getPlanet'
    ])
  }
}
</script>

<style scoped>

</style>
