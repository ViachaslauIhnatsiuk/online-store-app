import React from 'react';
import styles from './SubTotal.module.css';

function SubTotal({ totalPrice, countItems }) {
	const currency = 'BYN';

	return (
		<div className={styles.title}>
			<span className={styles.count_items}>{`Subtotal (${countItems} item):`}</span>
			<span className={styles.total_price}>{totalPrice}</span>
			<span className={styles.currency}>{currency}</span>
		</div>
	)
}

export { SubTotal };