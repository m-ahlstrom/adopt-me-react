import { useState, useContext } from 'react'
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

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  return (
    <div className="mx-auto my-0 w-11/12">
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-background-color p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          }
          setRequestParams(obj)
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input type="text" className="w-80 mb-5 block" name="location" id="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            className="w-80 mb-5 block"
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
          <select disabled={!breeds.length} className="w-80 mb-5 block" id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
