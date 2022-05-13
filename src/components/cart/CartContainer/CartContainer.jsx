import React from 'react';
import { BuyBox } from './BuyBox/BuyBox';
import { ShoppingCart } from '../CartContainer/ShoppingCart/ShoppingCart';
import s from './CartContainer.module.css';
import { useSelector } from 'react-redux';
import getTotalPrice from '../../../js/getTotalPrice';
import getItemCount from '../../../js/getItemCount';

function CartContainer() {
	const cart = useSelector((state) => state.user.cart);
	const totalPrice = getTotalPrice(cart);
	const countItems = getItemCount(cart);

	return (
		<div className={s.wrapper}>
			<ShoppingCart cart={cart} totalPrice={totalPrice} countItems={countItems}/>
			<BuyBox totalPrice={totalPrice} countItems={countItems}/>
		</div>
	)
}

export { CartContainer };
