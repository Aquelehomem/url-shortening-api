import React from 'react'
import './NavBarMobile.scss'
export default function NavBarMobile({checked,list}) {
	var classes=['NavBarMobile',checked?'opacity':'']
	return (
		<div  className={classes[0] +' '+ classes[1]}>
			{list}
		</div>
	)
}
