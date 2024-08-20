import { useState, useMemo } from 'react'
import Pet from './Pet'
import { Pet as IPet } from '../APIResponseTypes'
import Pagination from './Pagination'

const Results = ({ pets }: { pets: IPet[] }) => {
  const pageSize = 6
  const data = pets

  const [currentPage, setCurrentPage] = useState(1)

  const currentPetData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return data.slice(firstPageIndex, lastPageIndex)
  }, [pageSize, currentPage, data])

  return (
    <div className="m-10 grid grid-cols-1 rounded-lg bg-background-color p-10 shadow-lg dark:bg-zinc-700 dark:text-white lg:col-span-2">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {!pets.length ? (
          <h1>No Pets Found</h1>
        ) : (
          currentPetData.map((pet) => {
            return (
              <Pet
                animal={pet.animal}
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                images={pet.images}
                location={`${pet.city}, ${pet.state}`}
                id={pet.id}
              />
            )
          })
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  )
}

export default Results
