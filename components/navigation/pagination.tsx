import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Previous
      </Button>
      <div className="text-sm font-medium px-2">
        Page {currentPage} of {totalPages}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  )
}
