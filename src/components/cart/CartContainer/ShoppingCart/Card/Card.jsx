import React from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteCardAction,
	toogleChoiseAction,
} from '../../../../../redux-store/actions/cartActions';
import s from './Card.module.css';
import { SelectQuantity } from './SelectQuantity/SelectQuantity';

function Card({
	data: {
		category,
		currency,
		description,
		discount,
		id,
		img,
		price,
		title,
		isChoise,
		count,
	},
}) {
	const arrDescr = [];
	for (const [key, value] of Object.entries(description)) {
		arrDescr.push(`${key} ${value}`);
	}

	const dispatch = useDispatch();

	const toggleChoise = (cardId) => dispatch(toogleChoiseAction(cardId));
	const deleteCard = (cardId) => dispatch(deleteCardAction(cardId));

	return (
		<div className={s.card_wrapper}>
			<div className={s.card_toggle_box}>
				{isChoise ? (
					<span
						className={s.card_choised}
						onClick={() => toggleChoise(id)}
					></span>
				) : (
					<span
						className={s.card_unchoised}
						onClick={() => toggleChoise(id)}
					></span>
				)}
			</div>
			<div className={s.card_image}>
				<img src={img} alt={title} />
			</div>
			<div className={s.card_description}>
				<h3 className={s.card_description_title}>{title}</h3>
				<div className={s.card_description_items}>
					{arrDescr.map((item) => {
						return (
							<span key={item} className={s.card_description_item}>
								{item}
							</span>
						);
					})}
				</div>
				<div className={s.action_links}>
					<SelectQuantity id={id} count={count} />
					<span className={s.action_separator}></span>
					<span className={s.action_link_delete} onClick={() => deleteCard(id)}>
						{'Delete'}
					</span>
				</div>
			</div>
			<div className={s.card_price}>
				<span>{price} </span>
				<span>{currency}</span>
				<div></div>
			</div>
		</div>
	);
}

export { Card };