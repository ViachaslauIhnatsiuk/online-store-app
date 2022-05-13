import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Burger } from './Burger';
import s from './Menu.module.css';
import burger from '../../assets/icons/burger.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux-store/actions/productsActions';

const Menu = () => {
	const [menuToggle, setMenuToggle] = useState(false)
	const dispatch = useDispatch()
	const categories = [...new Set(useSelector(state => state.products.all.map(product => product.category)))]

	const links = categories.map(categoryName => {
		return (
				<NavLink to='/products' key={categoryName} className={s.category}>
					<div onClick={() => dispatch(setFilter({ category: categoryName }))}>
						{categoryName}
					</div>
				</NavLink>
		);
	})

	return (
		<div className={s.wrapper} >
			<Burger menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
			<div className={s.burger}>
				<img src={burger} alt="burger-icon" onClick={() => setMenuToggle(!menuToggle)} />
			</div>
			<div className={s.categories}>
				<NavLink to='/products' className={s.category}>
					<div onClick={() => dispatch(setFilter({ category: '' }))}>
						All
					</div>
				</NavLink>
				{links}
			</div>
		</div>
	)
}

export { Menu };