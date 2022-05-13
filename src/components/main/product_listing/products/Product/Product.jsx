import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAddProduct, deleteCardAction } from "../../../../../redux-store/actions/cartActions";
import { CountChanger } from "./countChanger/CountChanger";
import s from "./Product.module.css";

function Product({ product }) {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false)
  const descriptionToggler = useRef("")
  const dispatch = useDispatch()
  const cart = useSelector(state => state.user.cart)
  let isInCart = false

  if (!product) return "Not found"

  cart.forEach(cartProduct => {
    if (cartProduct.id === product.id) {
      isInCart = true
    }
  })

  const { 
    brand, 
    category, 
    currency, 
    description, 
    discount, 
    id, 
    img, 
    price, 
    title 
  } = product

  const productDescription = Object.entries(description).map(([key, value]) => {
    return <div className={isDescriptionOpen? `${s.description_field} ${s.active}` : s.description_field} 
    key={key}>{key}{value}</div>
  })

  function cartAddHandler() {
    const addedProduct = Object.assign({}, product, {isChoise: true, count: 1})
    dispatch(cartAddProduct(addedProduct))
  }

  function cartRemoveHandler() {
    dispatch(deleteCardAction(product.id))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.img_box}>
        <img className={s.img} src={img} alt="product card" />
      </div>
      <div className={s.text}>
        <h3>{title}</h3>
        <span className={s.price}>
          {price} <span className={s.currency}>{currency}</span>
          {" "}
          {discount ? <span className={s.before_discount}>{(price / 100 * (100 + discount)).toFixed(2)} {currency}</span> : undefined}
        </span>
        <div className={s.brand}>Brand: {brand}</div>
        <div className={s.category}>Category: {category}</div>
        <div className={s.description}
        onClick={(e) => {
          const isNeedClose = e.target === descriptionToggler.current
          if (isNeedClose) {
            setDescriptionOpen(!isDescriptionOpen)
          }
        }}>
          <span ref={descriptionToggler}>{isDescriptionOpen ? "Close " : "Open "}description </span>
          <div className={isDescriptionOpen ? `${s.arrow} ${s.active}` : s.arrow}></div> {productDescription}
        </div>
        <div className={s.btns_wrapper}>
          {isInCart && <CountChanger product={product} cart={cart} />}
          <button className={isInCart ? `${s.cart_btn} ${s.remove}` : s.cart_btn}
          onClick={isInCart ? cartRemoveHandler : cartAddHandler}>
            {isInCart ? "Remove" : "Add to cart"} 
            <div className={s.cart}></div>
          </button>
        </div>
        <div className={s.article}>Article: {id}</div>
      </div>
    </div>
  );
}

export default Product