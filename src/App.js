import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { ProductListing } from '../src/components/main/product_listing/ProductListing';
import { CartContainer } from '../src/components/cart/CartContainer/CartContainer';
import { ConfirmOrderContainer } from './components/cart/CartContainer/BuyBox/ConfirmOrderContainer/ConfirmOrderContainer';
import { useResponse } from './hooks/useResponse';

function App() {
	const { getDatabase } = useResponse();

	useEffect(() => {
		getDatabase();
	})

	return (
		<div className={s.wrapper}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="products" element={<ProductListing />} />
				<Route path="cart" element={<CartContainer />} />
				<Route path="cart/order" element={<ConfirmOrderContainer />} />
			</Routes>
			<Footer />
		</div>
	);
}

export { App };
