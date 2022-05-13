export default function getItemCount(array) {
	return array.reduce((acc, cur) => {
		if (cur.isChoise) {
			acc = acc + +cur.count;
			return +acc.toFixed(2);
		}
		return acc;
	}, 0);
}
