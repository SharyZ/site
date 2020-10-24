/* eslint-disable no-console */
import { SPHERES_URL } from '~/config/api'

export const state = () => ({
  spheres: [],
  sphere: {},
  isLoading: true,
  isError: false,
  error: null,
})

export const actions = {
  async loadSpheres({ commit }) {
    await this.$axios
      .get(SPHERES_URL)
      .then(response => {
        const { status } = response
        const data = response.data.payload.spheres

        if (status === 200) {
          commit('SET_SPHERES', data)
          commit('TOGGLE_LOADING', false)
        }
      })
      .catch(error => {
        console.log(error)
        commit('SET_ERROR', error)
        commit('TOGGLE_ERROR', true)
      })
  },
}

export const mutations = {
  SET_SPHERES(state, items) {
    state.spheres = items
  },
  TOGGLE_LOADING(state, status) {
    state.isLoading = status
  },
  TOGGLE_ERROR(state, status) {
    state.isError = status
  },
  SET_ERROR(state, error) {
    state.isError = error
  },
}

export const getters = {}
