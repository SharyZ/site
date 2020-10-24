import { getAllPetitions } from '~/service/petitionsService'

export const state = () => ({
  allPetitions: [],
})

export const actions = {
  fetchAllPetitions({ commit }) {
    getAllPetitions()
      .then(data => commit('allPetitions', data))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error))
  },
}

export const mutations = {
  allPetitions(state, data) {
    state.allPetitions = data
  },
}

export const getters = {}
