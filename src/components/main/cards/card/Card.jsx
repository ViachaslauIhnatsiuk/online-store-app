import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter } from '../../../../redux-store/actions/productsActions';
import s from './Card.module.css';

const Card = ({ image, title }) => {
	const dispatch = useDispatch()

	return (
		<div className={s.wrapper}>
			<div className={s.title}>{title}</div>
			<div className={s.image}>
				<img src={image} alt="" />
			</div>
			<Link className={s.link} 
			to='products'
			onClick={() => {
				dispatch(setFilter({category: title}))
				window.scrollTo({
					top: 0,
					behavior: "smooth"
			});
			}}>
				Shop now
			</Link> 
		</div>
	)
}

export { Card };