const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages <= 1) return null

  // Ограничиваем отображение страниц для больших наборов
  const maxVisiblePages = 10
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  const adjustedStartPage = Math.max(1, endPage - maxVisiblePages + 1)

  const pages = Array.from(
    { length: endPage - adjustedStartPage + 1 },
    (_, i) => adjustedStartPage + i
  )

  return (
    <div className="flex justify-end mt-10 gap-3">
      {/* Кнопка "Предыдущая" */}
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 h-9 flex items-center justify-center border rounded-md text-sm font-bold border-[#E5E5E5] text-[#3D3D3D] hover:border-[#46A358] hover:text-[#46A358] transition"
        >
          ←
        </button>
      )}

      {/* Номера страниц */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`
            w-9 h-9 flex items-center justify-center border rounded-md text-sm font-bold transition
            ${
              currentPage === page
                ? "bg-[#46A358] text-white border-[#46A358]"
                : "border-[#E5E5E5] text-[#3D3D3D] hover:border-[#46A358] hover:text-[#46A358]"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Кнопка "Следующая" */}
      {currentPage < totalPages && (
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 h-9 flex items-center justify-center border rounded-md text-sm font-bold border-[#E5E5E5] text-[#3D3D3D] hover:border-[#46A358] hover:text-[#46A358] transition"
        >
          →
        </button>
      )}
    </div>
  )
}

export default Pagination
