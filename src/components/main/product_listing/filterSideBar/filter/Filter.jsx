import React, { useState } from "react";
import s from "./Filter.module.css"
import arrow from "../../../../../assets/icons/arrow.svg"


function Filter(props) {
  const [isActive, setIsActive] = useState(false)

  return(
    <div className={s.filter}>
      <span className={isActive ? `${s.filter_header} ${s.active}` : s.filter_header}
      onClick={() => { setIsActive(!isActive) }}>
        {props.header}
        <img className={s.arrow}
        src={arrow} 
        alt="arrow" />
      </span>
      <div className={isActive ? `${s.filter_body} ${s.active}` : s.filter_body}>
        {props.children}
      </div>
    </div>
  );
}

export default Filter