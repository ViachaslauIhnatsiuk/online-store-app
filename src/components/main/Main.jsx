import React from 'react'
import { Outlet } from 'react-router-dom';
import { Cards } from './cards/Cards';
import s from './Main.module.css';
import { MainSlider } from './slider/MainSlider';

const Main = () => {
	return (
		<div className={s.wrapper}>
			<MainSlider />
			<Cards />
			<Outlet />
		</div>
	)
}

export { Main };