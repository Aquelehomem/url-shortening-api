import React from 'react'
import './Hamburger.scss'
const Hamburger = ({setCheck}) => {
	return (
		<div className="menu-wrap">
      <input type="checkbox" onClick={setCheck} unchecked="true" className="toggler"/>
      <div className="hamburguer">
      <div></div>
      </div>
    </div>
	)
}

export default Hamburger