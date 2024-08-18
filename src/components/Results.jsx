import { useState, useMemo } from 'react';
import Pet from './Pet'
import Pagination from './Pagination'

const Results = ({ pets }) => {
  let pageSize = 5;
  let data = pets;

  const [currentPage, setCurrentPage] = useState(1);

  const currentPetData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [pageSize, currentPage, data]);

  return (
    <div className="m-10 grid grid-cols-1 shadow-lg rounded-lg bg-background-color p-10">
    <div className="grid grid-cols-1 mb-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={data.length}
    pageSize={pageSize}
    onPageChange={page => setCurrentPage(page)}
  />
  </div>
  )
}

export default Results
