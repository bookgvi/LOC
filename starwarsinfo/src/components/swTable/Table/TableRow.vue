<template lang="pug">
  q-tr
    q-td(v-for="({ name, __tdClass }, value) in cols" :key="value" :class="__tdClass")
      template(v-if="name === 'id'") {{ row.id }}
      template(v-else-if="name === 'name'") {{ row.name }}
      template(v-else-if="name === 'height'") {{ row.height }}
      template(v-else-if="name === 'mass'") {{ row.mass }}
      template(v-else-if="name === 'homeworld'")
        .inline-block(@click.prevent="card = true")
          q-chip(style="cursor: pointer;") {{ row.homeworld.name }}
        q-dialog(v-model="card")
          q-card.q-pa-lg
            h5.q-ma-none {{ row.homeworld.name }}
            .q-py-xs Rotation period = {{ row.homeworld.rotation_period }}
            .q-py-xs Orbital period = {{ row.homeworld.orbital_period }}
            .q-py-xs Diameter = {{ row.homeworld.diameter }}
            .q-py-xs Climate = {{ row.homeworld.climate }}
            .q-py-xs Gravity = {{ row.homeworld.gravity }}
            .q-py-xs Terrain = {{ row.homeworld.terrain }}
            .q-py-xs Surface water = {{ row.homeworld.surface_water }}
            .q-py-xs Population = {{ row.homeworld.population }}
        slot(#planet)
</template>

<script>
export default {
  props: {
    row: Object,
    cols: Array,
    getPlanet: Function
  },
  name: 'TableRow',
  data: () => ({
    card: false
  }),
  methods: {
    planetDetail (payload) {

    }
  }
}
</script>
