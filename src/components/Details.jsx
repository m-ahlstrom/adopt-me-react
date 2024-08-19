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
      <div className="my-10 flex content-center items-center justify-center p-4">
        <h2 className="animate-spin text-8xl">🌀</h2>
      </div>
    )
  }

  const pet = results.data.pets[0]

  return (
    <div className="my-6 mx-auto w-11/12 rounded bg-background-color p-10 shadow-lg">
      <Carousel images={pet.images} />
      <div>
        <h1 className="mt-5 text-center text-6xl">{pet.name}</h1>
        <h2 className="my-5 mt-1 text-center">{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <center>
          <button className="mx-auto mb-5" onClick={() => setShowModal(true)}>
            Adopt {pet.name}
          </button>
        </center>
        <p className="px-4">{pet.description}</p>
        {showModal ? (
          <Modal>
            <div className="max-w-lg rounded bg-white p-4 text-center">
              <h1 className="mb-4">Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  className="mr-4 inline-block"
                  onClick={() => {
                    setAdoptedPet(pet)
                    navigate('/')
                  }}
                >
                  Yes
                </button>
                <button
                  className="mr-4 inline-block"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
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
