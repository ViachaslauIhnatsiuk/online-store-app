import React from 'react';
import { useSelector } from 'react-redux';
import getItemCount from '../../../../../js/getItemCount';
import getTotalPrice from '../../../../../js/getTotalPrice';
import { SubTotal } from '../../SubTotal/SubTotal';
import s from './ConfirmOrderContainer.module.css';
import { OrderForm } from './OrderForm/OrderForm';

function ConfirmOrderContainer() {
	const user = useSelector((state) => state.user);
	const totalPrice = getTotalPrice(user.cart);
	const countItems = getItemCount(user.cart);

	return (
		<div className={s.confirm_order_wrapper}>
			<h3 className={s.confirm_order_title}>Confirm order</h3>

			<div className={s.order_list}>
				{user.cart.map((item, index) => {
					if (item.isChoise) {
						return (
							<div className={s.order_list_item} key={item.id}>
								<span className={s.item_pos}>{index + 1}.</span>
								<span className={s.item_title}>{item.title}</span>
								<span className={s.item_count}>x{item.count}</span>
								<span className={s.item_price}>{item.price}</span>
								<span className={s.item_currency}>{item.currency}</span>
							</div>
						);
					}
				})}
				<SubTotal totalPrice={totalPrice} countItems={countItems}/>
			</div>

			<OrderForm userId={user.id} name={user.name} email={user.email} totalPrice={totalPrice}/>
		</div>
	);
}

export { ConfirmOrderContainer };
