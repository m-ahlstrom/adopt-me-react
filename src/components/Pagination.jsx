import React from 'react'
import { usePagination, DOTS } from '../hooks/usePagination'

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div>
      {console.log(paginationRange)}
      <button
        disabled={currentPage === 1}
        className="mr-4 disabled:opacity-50"
        onClick={onPrevious}
      >
        &lt;--
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button key={pageNumber} className="mr-4">
              &#8230;
            </button>
          )
        }

        return (
          <button
            key={pageNumber}
            className="mr-4 disabled:opacity-50"
            selected={pageNumber === currentPage}
            disabled={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}
      <button
        disabled={currentPage === lastPage}
        className="disabled:opacity-50"
        onClick={onNext}
      >
        --&gt;
      </button>
    </div>
  )
}

export default Pagination
