export function formatGoods(count: number) {
	let ending

	if (count % 10 == 1 && count % 100 != 11) {
		ending = 'товар'
	} else if (
		count % 10 >= 2 &&
		count % 10 <= 4 &&
		!(count % 100 >= 12 && count % 100 <= 14)
	) {
		ending = 'товара'
	} else {
		ending = 'товаров'
	}

	return `${count} ${ending}`
}
