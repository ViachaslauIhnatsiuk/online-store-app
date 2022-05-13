export default function sortProducts(sort, products) {
	if (!Array.isArray(products)) return []
  switch(sort) {
		case "Feature":
			return [...products].sort((prev, next) => {
				if (prev.id < next.id) return 1
				if (prev.id === next.id) return 0
				if (prev.id > next.id) return -1
        return null
			})
		case "Price Min":
			return [...products].sort((prev, next) => {
				if (prev.price > next.price) return 1
				if (prev.price === next.price) return 0
				if (prev.price < next.price) return -1
        return null
			})
		case "Price Max":
			return [...products].sort((prev, next) => {
				if (prev.price < next.price) return 1
				if (prev.price === next.price) return 0
				if (prev.price > next.price) return -1
        return null
			})
		case "By Discount":
			return [...products].sort((prev, next) => {
				if (prev.discount < next.discount) return 1
				if (prev.discount === next.discount) return 0
				if (prev.discount > next.discount) return -1
        return null
			})
    default: return products
	}
}