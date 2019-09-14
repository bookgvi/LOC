import * as types from './mutation-types'
import Vue from 'vue'

export const mutations = {
  [types.GET_PERSONS]: (state, { person, page }) => {
    state.persons = person
    if (isNaN(page)) { page = 1 }
    state.persons.forEach((item, index) => {
      Vue.set(item, 'id', index + 1 + 10 * (page - 1))
    })
  },
  [types.GET_PLANET]: (state, { planet, index }) => {
    Vue.set(state.persons[index], 'homeworld', planet)
  }
}
