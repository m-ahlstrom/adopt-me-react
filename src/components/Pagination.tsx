import React from 'react'
import { usePagination, DOTS } from '../hooks/usePagination'

type OnPageChangeFunction = (args: number) => void

interface Iprops {
  onPageChange: OnPageChangeFunction
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

const Pagination = (props: Iprops) => {
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

  if (!paginationRange) {
    return null
  }

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div>
      <button
        disabled={currentPage === 1}
        className="mr-4 disabled:opacity-50"
        onClick={onPrevious}
      >
        &lt;--
      </button>
      {paginationRange.map((pageNumber: number | string) => {
        if (pageNumber === DOTS) {
          return (
            <button key={pageNumber} className="mr-4">
              &#8230;
            </button>
          )
        }

        if (typeof pageNumber === 'number') {
          return (
            <button
              key={pageNumber}
              className="mr-4 disabled:opacity-50"
              data-selected={pageNumber === currentPage}
              disabled={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        }

        
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
