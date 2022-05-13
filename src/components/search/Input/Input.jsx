import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Input.module.css';
import { setChosenProduct } from '../../../redux-store/actions/productsActions';
import { NavLink } from 'react-router-dom';

const Input = ({ inputValue, setInputValue }) => {
	const dispatch = useDispatch();
	const [chosen, setChosen] = useState('');
	const products = useSelector(state => state.products.all);

	const foundProducts = products.filter(product => {
		return product.title.toLowerCase().includes(inputValue.toLowerCase())
	})

	useEffect(() => {
		if (chosen) {
			dispatch(setChosenProduct(chosen))
		}
		setChosen('')
	}, [dispatch, chosen])

	return (
		<div className={s.wrapper}>
			<input
				className={s.input}
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				type="text"
			/>
			{inputValue.length > 0
				? <ul className={s.suggestions}>
					{foundProducts.map(item => {
						return (
							<li className={s.product} key={String(item.id)}>
								<NavLink
									to='/products'
									onClick={() => {
										setChosen(item);
										setInputValue('')
									}}
								>
									{item.title}
								</NavLink>
							</li>
						)
					})}
				</ul>
				: null
			}
		</div>
	)
};

export { Input }