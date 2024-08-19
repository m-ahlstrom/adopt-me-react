import {
  useState,
  useContext,
  useDeferredValue,
  useMemo,
  useTransition,
} from 'react'
import { useQuery } from '@tanstack/react-query'
import useBreedList from '../hooks/useBreedList'
import Results from './Results'
import fetchSearch from '../utils/fetchSearch'
import AdoptedPetContext from '../contexts/AdoptedPetContext'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  })
  const [animal, setAnimal] = useState('')
  const [breeds] = useBreedList(animal)
  const [adoptedPet] = useContext(AdoptedPetContext)
  const [isPending, startTransition] = useTransition()

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []
  const deferredPets = useDeferredValue(pets)
  const renderedPets = useMemo(
    () => <Results pets={deferredPets} />,
    [deferredPets],
  )

  return (
    <div className="mx-auto my-0 grid w-11/12 grid-cols-1 lg:grid-cols-3">
      <form
        className="m-10 flex h-auto flex-col items-center justify-center rounded-lg bg-background-color p-10 shadow-lg dark:bg-zinc-700 dark:text-white lg:col-span-1"
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          }
          startTransition(() => {
            setRequestParams(obj)
          })
        }}
      >
        {adoptedPet ? (
          <div className="float-left mx-5 mb-5 block h-32 w-32 [clip-path:circle(50%)]">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            className="mb-8 block w-60 text-lg dark:text-black md:w-80"
            name="location"
            id="location"
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            className="mb-8 block w-60 text-lg dark:text-black md:w-80"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            className="mb-8 block w-60 text-lg dark:text-black md:w-80"
            id="breed"
            name="breed"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        {isPending ? (
          <div className="my-10 flex content-center items-center justify-center p-4">
            <h2 className="animate-spin text-8xl">🌀</h2>
          </div>
        ) : (
          <button>Submit</button>
        )}
      </form>
      {renderedPets}
    </div>
  )
}

export default SearchParams
