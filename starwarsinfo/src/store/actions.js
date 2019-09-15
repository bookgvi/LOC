import * as types from './mutation-types'
import Vue from 'vue'
export const actions = {
  getPersons: async ({ commit, state }, relUrl) => {
    const person = await Vue.prototype.$http.get(relUrl).then(resp => resp.data.results)
    const page = relUrl[relUrl.length - 1]
    commit(types.GET_PERSONS, { person, page })
    state.persons.forEach(async (item, index) => {
      const planet = await Vue.prototype.$http.get(item.homeworld.split('api/')[1]).then(resp => resp.data)
      commit(types.GET_PLANET, { planet, index })
      const species = await Vue.prototype.$http.get(item.species[0].split('api/')[1]).then(resp => resp.data)
      commit(types.GET_SPECIES, { species, index })
    })
  }
}
