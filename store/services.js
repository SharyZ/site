/* eslint-disable no-console */
import { SERVICES_URL } from '~/config/api'

export const state = () => ({
  services: [],
  service: {},
  isLoading: true,
  isError: false,
  error: null,
})

export const actions = {
  async loadServices({ commit }) {
    await this.$axios
      .get(SERVICES_URL)
      .then(response => {
        const { status } = response
        const data = response.data.payload.services.data

        if (status === 200) {
          commit('SET_SERVICES', data)
          commit('TOGGLE_LOADING', false)
        }
      })
      .catch(error => {
        console.log(error)
        commit('SET_ERROR', error)
        commit('TOGGLE_ERROR', true)
      })
  },
  async loadService({ commit }, value) {
    await this.$axios
      .get(`${SERVICES_URL}/${value}`)
      .then(response => {
        const { status } = response
        const data = response.data.payload.service

        if (status === 200) {
          commit('SET_SERVICE', data)
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
  SET_SERVICES(state, items) {
    state.services = items
  },
  SET_SERVICE(state, item) {
    state.service = item
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
