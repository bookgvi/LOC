<template lang="pug">
  q-tr
    q-td(v-for="({ name, __tdClass }, value) in cols" :key="value" :class="__tdClass")
      template(v-if="name === 'id'") {{ row.id }}
      template(v-else-if="name === 'person'")
        .inline-block(@click.prevent="cardPerson = true")
          q-chip.cursor-pointer {{ row.name }}
        q-dialog(v-model="cardPerson")
          q-card.q-pa-lg
            h5.q-ma-none {{ row.name }}
            .q-py-xs Height = {{ row.height }}
            .q-py-xs Mass = {{ row.mass }}
            .q-py-xs Heir color = {{ row.hair_color }}
            .q-py-xs Skin color = {{ row.skin_color }}
            .q-py-xs Eye color = {{ row.eye_color }}
            .q-py-xs Birth = {{ row.birth_year }}
            .q-py-xs Gender = {{ row.gender }}
      template(v-else-if="name === 'species'")
        .inline-block(@click.prevent="cardSpieces = true")
          q-chip.cursor-pointer {{ row.species.name }}
        q-dialog(v-model="cardSpieces")
          q-card.q-pa-lg
            h5.q-ma-none {{ row.species.name }}
            .q-py-xs Classification = {{ row.species.classification }}
            .q-py-xs Designation = {{ row.species.designation }}
            .q-py-xs Average height = {{ row.species.average_height }}
            .q-py-xs Skin colors = {{ row.species.skin_colors }}
            .q-py-xs Hair colors = {{ row.species.hair_colors }}
            .q-py-xs Eye colors = {{ row.species.eye_colors }}
            .q-py-xs Average lifespan = {{ row.species.average_lifespan }}
            .q-py-xs Language = {{ row.species.language }}
      template(v-else-if="name === 'homeworld'")
        .inline-block(@click.prevent="cardPlanet = true")
          q-chip.cursor-pointer {{ row.homeworld.name }}
        q-dialog(v-model="cardPlanet")
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
    cardPlanet: false,
    cardSpieces: false,
    cardPerson: false
  }),
  methods: {
    planetDetail (payload) {

    }
  }
}
</script>
