<template lang="pug">
  q-tr
    q-td(v-for="({ name, __tdClass }, value) in cols" :key="value" :class="__tdClass")
      template(v-if="name === 'id'")
      template(v-else-if="name === 'name'") {{ row.name }}
      template(v-else-if="name === 'height'") {{ row.height }}
      template(v-else-if="name === 'mass'") {{ row.mass }}
      template(v-else-if="name === 'homeworld'")
        .inline-block(@click.prevent="")
          q-chip(style="cursor: pointer;") {{ row.homeworld }}
        slot(#planet)
</template>

<script>
export default {
  props: {
    row: Object,
    cols: Array
  },
  name: 'TableRow'
}
</script>
