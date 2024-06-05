import {
  Pagination as PaginationCN,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/_components/ui/pagination'

interface IPagination {
  totalPages: number
  currentPage: number
  handlePageChange: (page: number) => void
}

export function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}: IPagination) {
  const renderPageNumbers = () => {
    const pages = []
    const ellipsis = <PaginationEllipsis />

    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              className={
                i === currentPage
                  ? 'bg-gray-900 text-gray-100 hover:bg-gray-800 hover:text-gray-200'
                  : 'text-gray-900 hover:bg-gray-200'
              }
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(i)
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }
    } else {
      for (let i = 1; i <= 2; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              className={
                i === currentPage
                  ? 'bg-gray-900 text-gray-100 hover:bg-gray-800 hover:text-gray-200'
                  : 'text-gray-900 hover:bg-gray-200'
              }
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(i)
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }

      if (totalPages > 4) {
        pages.push(ellipsis)

        for (let i = totalPages - 1; i <= totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                className={
                  i === currentPage
                    ? 'bg-gray-900 text-gray-100 hover:bg-gray-800 hover:text-gray-200'
                    : 'text-gray-900 hover:bg-gray-200'
                }
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(i)
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          )
        }
      } else {
        for (let i = 3; i <= totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                className={
                  i === currentPage
                    ? 'bg-gray-900 text-gray-100 hover:bg-gray-800 hover:text-gray-200'
                    : 'text-gray-900 hover:bg-gray-200'
                }
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(i)
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          )
        }
      }
    }

    return pages
  }

  return (
    <PaginationCN>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="text-gray-900 hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(currentPage - 1)
            }}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            href="#"
            className="text-gray-900 hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationCN>
  )
}
