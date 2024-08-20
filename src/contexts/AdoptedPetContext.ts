import { createContext } from 'react'
import { Pet } from '../APIResponseTypes'

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: 'Freyja',
    animal: 'cat',
    description: 'Lorem ipsum',
    breed: 'European Shorthair',
    images: [],
    city: 'Szeged',
    state: 'Hungary',
  },
  () => {},
])

export default AdoptedPetContext
