import { FakePetitionsData } from '~/fakeDB'

export const getAllPetitions = () =>
  new Promise(resolve => resolve(FakePetitionsData))
