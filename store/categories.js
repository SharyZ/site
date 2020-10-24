/* eslint-disable no-console */
import { CATEGORIES_URL } from '~/config/api'

export const state = () => ({
  categories: [],
  category: {},
  isLoading: true,
  isError: false,
  error: null,
})

export const actions = {
  async loadCategories({ commit }) {
    await this.$axios
      .get(CATEGORIES_URL)
      .then(response => {
        const { status } = response
        const data = response.data.payload.categories

        if (status === 200) {
          commit('SET_CATEGORIES', data)
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
  SET_CATEGORIES(state, items) {
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
