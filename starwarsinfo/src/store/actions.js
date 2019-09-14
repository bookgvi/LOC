import * as types from './mutation-types'
import Vue from 'vue'
export const actions = {
  getPersons: async ({ commit }, relUrl) => {
    const person = await Vue.prototype.$http.get(relUrl).then(resp => resp.data.results)
    const page = relUrl[relUrl.length - 1]
    commit(types.GET_PERSONS, { person, page })
  }
}
