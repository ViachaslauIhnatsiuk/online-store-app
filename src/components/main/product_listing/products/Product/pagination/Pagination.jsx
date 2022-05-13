import React, { useState, useEffect } from "react";
import s from './Pagination.module.css'

function Pagination(props) {
	const { productsPerPage, catalog, currentPage, setCurrentPage } = props;

	const pagesNumber = Math.ceil(catalog.length / productsPerPage);
	let pages = [];

	for (let i = 1; i <= pagesNumber;) {
		pages.push(i++);
	}

	const [pageNumbers, setPageNumbers] = useState([])

	useEffect(() => {
		const dots = '...';
		const leftDots = '... ';
		const rightDots = ' ...';
		if (pagesNumber < 6) {
			pages = [...pages]
		} else if (currentPage >= 1 && currentPage <= 3) {
			pages = [1, 2, 3, 4, dots, pages.length]
		} else if (currentPage === 4) {
			const slice = pages.slice(0, 5)
			pages = [...slice, dots, pages.length]
		} else if (currentPage > 4 && currentPage < pages.length - 2) {
			const slice = pages.slice(currentPage - 2, currentPage + 1)
			pages = ([1, leftDots, ...slice, rightDots, pages.length])
		} else if (currentPage > pages.length - 3) {
			const slice = pages.slice(pages.length - 4)
			pages = ([1, leftDots, ...slice])
		} else if (currentPage === dots) {
			setCurrentPage(pageNumbers[pageNumbers.length - 3] + 1)
		} else if (currentPage === rightDots) {
			setCurrentPage(pageNumbers[3] + 2)
		} else if (currentPage === leftDots) {
			setCurrentPage(pageNumbers[3] - 2)
		}

		setPageNumbers(pages)
	}, [currentPage, productsPerPage, catalog])

	return (
		<div className={s.pagination}>
			<div className={s.previous} onClick={() =>
				currentPage > 1
					? setCurrentPage(currentPage - 1)
					: null}>Previous</div>
			{pageNumbers.map((page, index) => <div
				key={index}
				className={
					currentPage === page
						? s.current__page
						: s.page}
				onClick={() => setCurrentPage(page)}>{page}</div>)}
			<div className={s.next} onClick={() =>
				currentPage < pagesNumber
					? setCurrentPage(currentPage + 1)
					: null}>Next</div>
		</div>
	);
};

export { Pagination };