import React, { useEffect } from "react";
import s from "./FilterSideBar.module.css"
import Filter from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../redux-store/actions/productsActions";
import Categories from "./categories/Categories";

function FilterSideBar() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.products.filter)
  const categoriesFilter = useSelector(state => state.products.filter.category)
	const visible = useSelector(state => state.products.visible)

  useEffect(() => {
		if (filter.brands.length) {
			dispatch(setFilter({brands: [], priceMin: 0, priceMax: 0}))
		}
  }, [categoriesFilter])

  let brands = [...new Set(useSelector(state => state.products.all)
    .filter(product => {
    if (filter.category) {
      return product.category === filter.category
    }
    return product
  }).map(product => product.brand))]

  brands = brands.map(brand => {
    const isChecked = Array.isArray(filter.brands) && filter.brands.includes(brand)

    return <div className={`${s.brand} ${ isChecked ? s.active : ""}`}
    key={brand}
    onClick={() => {
      if (isChecked) {
        dispatch(setFilter({ brands: [...filter.brands.filter(el => el !== brand)] }))
        return
      } 
      dispatch(setFilter({ brands: [...filter.brands, brand] }))
    }}>
      <div className={s.brand_check}></div>
      <div className={s.brand_name}>{brand}</div>
    </div>
  })

  return (
    <div className={s.wrapper}>
      <h4>Categories: </h4>
      <Categories filter={filter}/>
      <h4 className={s.section}>You can filter by:</h4>
      <Filter header={'Price'}>
        <p className={s.price_header}>Min price</p>

        <input type="text" 
        value={filter.priceMin ? filter.priceMin : ""} 
        className={s.input}
        onChange={
          (e) => {
            dispatch(setFilter({ priceMin: +e.target.value }))
          }
        }/>

        <p className={s.price_header}>Max Price</p>

        <input type="text" 
        value={filter.priceMax ? filter.priceMax : ""} 
        className={s.input}
        onChange={
          (e) => {
            dispatch(setFilter({ priceMax: +e.target.value }))
          }
        }/>
      </Filter>
      <Filter header={'Brands'}>
        {brands}
      </Filter>
    </div>
  );
}

export default FilterSideBar