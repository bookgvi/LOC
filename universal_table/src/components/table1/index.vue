<template lang="pug">
  .row.justify-center.q-pt-xl
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
      { name: 'id', label: 'id', field: 'id' },
      { name: 'name', label: 'name', field: 'name', align: 'left', width: 200 },
      { name: 'comment', label: 'comment', field: 'comment', classes: 'text-red' }
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
      }
    ]
  })
}
</script>

<style scoped>

</style>
