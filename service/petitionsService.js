import { FakePetitionsData } from '~/fakeDB'

export const getAllPetitions = () =>
  new Promise(resolve => resolve(FakePetitionsData))

export const getPetition = id =>
  new Promise((resolve, reject) => {
    const data = FakePetitionsData
    const _id = Number(id)

    data.map(petition => {
      if (petition.id === _id) {
        resolve(petition)
      } else {
        reject(new Error('Not Found'))
      }
    })
  })
