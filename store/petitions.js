import { getAllPetitions, getPetition } from '~/service/petitionsService'

export const state = () => ({
  allPetitions: [],
  petition: {},
})

export const actions = {
  fetchAllPetitions({ commit }) {
    getAllPetitions()
      .then(data => commit('allPetitions', data))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error))
  },
  loadPetition({ commit }, id) {
    getPetition(id).then(data => {
      commit('SET_PETITION', data)
    })
  },
}

export const mutations = {
  allPetitions(state, data) {
    state.allPetitions = data
  },
  SET_PETITION(state, item) {
    state.petition = item
  },
}

export const getters = {}
