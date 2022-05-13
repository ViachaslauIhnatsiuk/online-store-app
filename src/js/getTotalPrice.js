export default function getTotalPrice(array) {
	return array.reduce((acc, cur) => {
		if (cur.isChoise) {
			acc = acc + +cur.price * +cur.count;
			return +acc.toFixed(2);
		}
		return acc;
	}, 0);
}
