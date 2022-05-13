import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { Location } from '../account/Location/Location';
import { Search } from '../search/Search';
import { Account } from '../account/Account';
import Cart from '../cart/Cart';
import { Menu } from '../menu/Menu';
import { useSelector } from 'react-redux';

const Header = () => {
	const user = useSelector(state => state.user);

	return (
		<div className={s.wrapper}>
			<div className={s.main}>
				<Link to='/'><img className={s.logo} src={logo} alt="logo" /></Link>
				<Location />
				<Search />
				<Account />
				{user.name ? <Link to='/cart'> <Cart /></Link> : <Link to='/authorization'><Cart /></Link>}
			</div>
			<Menu />
		</div>
	)
}

export { Header };