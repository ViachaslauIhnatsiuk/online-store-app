import React, { useState } from "react";
import s from './Products.module.css'
import Product from "./Product/Product";
import { useSelector } from "react-redux";
import { Pagination } from "./Product/pagination/Pagination";

function Products({ productsPerPage }) {
	const [currentPage, setCurrentPage] = useState(1);
	const catalog = useSelector(state => state.products.visible);

	const products = catalog.map(product => <Product product={product} key={product.id} />);
	const currentProducts = products.slice(currentPage * productsPerPage - productsPerPage, productsPerPage * currentPage)

	if (products.length < 1)
		return (
			<div className={s.products}>
				<h3 className={s.not_found}>Products not found...</h3>
			</div>
		);

	return (
		<div className={s.products}>
			{currentProducts}
			<Pagination
				productsPerPage={productsPerPage}
				catalog={catalog}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export { Products };