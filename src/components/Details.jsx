import { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Carousel from './Carousel'
import fetchPet from '../utils/fetchPet'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal'
import AdoptedPetContext from '../contexts/AdoptedPetContext'

const Details = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext)
  const { id } = useParams()
  const results = useQuery(['details', id], fetchPet)

  if (results.isLoading) {
    return (
      <div className="items-center content-center justify-center flex p-4 my-10">
        <h2 className="text-8xl animate-spin">🌀</h2>
      </div>
    )
  }

  const pet = results.data.pets[0]

  return (
    <div className="w-11/12 bg-background-color shadow-lg my-6 rounded mx-auto p-10">
      <Carousel images={pet.images} />
      <div>
        <h1 className='text-center text-6xl mt-5'>{pet.name}</h1>
        <h2 className='text-center mt-1 my-5'>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button className='mb-5' onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p className='px-4'>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet)
                    navigate('/')
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}

export default DetailsErrorBoundary
