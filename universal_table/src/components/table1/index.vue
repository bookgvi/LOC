<template lang="pug">
  .row.justify-center.q-pt-xl
    .col-6
      make-table(
        :columns="columns"
        :data="datas"
      )
</template>

<script>
import makeTable from '../makeTable'
export default {
  components: { makeTable },
  data: () => ({
    columns: [
      { name: 'id', label: 'ID', field: 'id', align: 'center' },
      { name: 'name', label: 'NAME', field: 'name', align: 'center', width: 200 },
      { name: 'comment', label: 'COMMENT', field: 'comment', classes: 'text-red' }
    ],
    datas: [
      {
        id: 1,
        name: 'Item1',
        comment: 'dummy1'
      },
      {
        id: 2,
        name: 'Item2',
        comment: 'dummy2'
      },
      {
        id: 3,
        name: 'Item2',
        comment: 'dummy2'
      },
      {
        id: 4,
        name: 'Item2',
        comment: 'dummy2'
      },
      {
        id: 5,
        name: 'Item2',
        comment: 'dummy2'
      }
    ]
  })
}
</script>

<style scoped>

</style>
