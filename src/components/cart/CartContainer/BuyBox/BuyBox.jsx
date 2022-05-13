import React from 'react';
import { Link } from 'react-router-dom';
import { SubTotal } from '../SubTotal/SubTotal';
import s from './BuyBox.module.css';

function BuyBox({ totalPrice, countItems }) {
	return (
		<div className={s.wrapper}>
			<SubTotal totalPrice={totalPrice} countItems={countItems} />
			{countItems ? (
				<Link to='/cart/order'>
					<button className={s.button}>{'Buy now'}</button>
				</Link>
			) : (
				<button className={s.button} disabled={!countItems}>
					{'Buy now'}
				</button>
			)}
		</div>
	);
}

export { BuyBox };
