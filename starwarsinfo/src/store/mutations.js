import * as types from './mutation-types'
// import Vue from 'vue'

export const mutations = {
  [types.GET_PERSONS]: (state, payload) => {
    state.persons = payload
  },
  [types.GET_PLANET]: (state, payload) => {
    state.planet = payload
  }
}
