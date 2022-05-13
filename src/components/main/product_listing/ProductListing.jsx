import React, { useState } from 'react';
import FilterSideBar from './filterSideBar/FilterSideBar';
import s from './ProductListing.module.css';
import { Products } from './products/Products';
import { TopBar } from './topBar/TopBar';

function ProductListing() {
	const [productsPerPage, setProductsPerPage] = useState(10);

	return (
		<div className={s.product_listing}>
			<TopBar productsPerPage={productsPerPage} setProductsPerPage={setProductsPerPage} />
			<div className={s.main}>
				<FilterSideBar />
				<Products productsPerPage={productsPerPage} />
			</div>
		</div>
	);
}

export { ProductListing };