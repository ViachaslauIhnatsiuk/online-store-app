import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../../redux-store/actions/productsActions";
import s from "./Categories.module.css"

function Categories({ filter }) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  let categories = [...new Set(useSelector(state => state.products.all).map(product => product.category))]
  categories = categories.map(category => {
    return <div className={s.category}
    key={category}
    onClick={() => {
      dispatch(setFilter({category: category, brands: []}))
      setIsOpen(false)
    }}>
      {category}
    </div>
  })

  return (
    <div className={s.wrapper}>
      <div className={`${s.active_category} ${isOpen ? s.open : ""}`}
      onClick={() => {
        setIsOpen(!isOpen)
      }}>
        <div className={s.active_text}>{filter.category || "All"}</div>
        <div className={s.indicator}>+</div>
      </div>
      <div className={`${s.categories} ${isOpen ? s.open : ''}`}>
        <div className={s.category}
        onClick={() => {
          dispatch(setFilter({category: "", brands: []}))
          setIsOpen(false)
        }}>
          All
        </div>
        {categories}
      </div>
    </div>
  );
}

export default Categories