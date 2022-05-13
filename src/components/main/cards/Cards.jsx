import React from 'react';
import s from './Cards.module.css';
import { Card } from './card/Card';
import { useSelector } from 'react-redux';

const Cards = () => {
	const products = useSelector(state => state.products.all)
	const categories = [...new Set (products.map(product => product.category))]

	const cards = categories.map(category => {
		const productWithImgId = products.findIndex(product => product.category === category)
		const img = products[productWithImgId].img
		return <Card image={img}
						title={category}
						key={category} />
	})

	return (
		<div className={s.wrapper}>
			{ cards }
		</div>
	)
}

export { Cards };