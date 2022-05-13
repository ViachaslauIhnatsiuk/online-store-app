import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Burger.module.css';
import close from '../../assets/icons/close.svg';
import { setFilter } from '../../redux-store/actions/productsActions';
import { NavLink } from 'react-router-dom';

const Burger = ({ menuToggle, setMenuToggle }) => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user);

	const categories = [...new Set(useSelector(state => state.products.all.map(product => product.category)))].slice(0, 7)

	const links = categories.map(categoryName => {
		return (
				<li className={s.link} key={categoryName}>
					<NavLink to='/products' className={s.category}>
						<div onClick={() => {
							dispatch(setFilter({ category: categoryName }))
							setMenuToggle(false)
						}}>
							{categoryName}
						</div>
					</NavLink>
				</li>
		);
	})


	return (
		<div className={menuToggle ? s.active : s.menu} >
			<div className={menuToggle ? s.blur : undefined} onClick={() => setMenuToggle(false)} />
			<img className={s.close} src={close} alt="close-icon" onClick={() => setMenuToggle(false)} />
			<h2 className={s.account}>Hello, {user.name ? user.name : 'Sign in'}</h2>
			<nav className={s.body}>
				<ul className={s.list}>
					<li className={s.link}>
						<NavLink to='/products' className={s.category}>
							<div onClick={() => {
								dispatch(setFilter({ category: '' }))
								setMenuToggle(false)
							}}>
								All
							</div>
						</NavLink>
					</li>
					{links}
				</ul>
			</nav>
		</div>
	)
}

export { Burger };