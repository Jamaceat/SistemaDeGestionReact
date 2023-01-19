import singleItem from "./SingleItem"

interface Pagination {
	items: singleItem[]
	page: number
	size: number
	total: number
	pages: number
	next_page: number
	previous_page: number
}

export default Pagination
