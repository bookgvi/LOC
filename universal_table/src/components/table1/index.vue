<template lang="pug">
  .row.justify-center.q-pt-xl
    .col-6
      make-table(
        :columns="columns"
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
    ]
  })
}
</script>

<style scoped>

</style>
