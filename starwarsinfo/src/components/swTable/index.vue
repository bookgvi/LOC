<template lang="pug">
  .row.justify-center
    .col-8
      h2.text-center StarWars Info
      Table
</template>

<script>
import Table from './Table/table'
export default {
  name: 'swTable',
  components: { Table }
}
</script>

<style>
</style>
