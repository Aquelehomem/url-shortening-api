import React from 'react'
import './Section2.scss'
import IconComponents from './IconComponents'
const Section2 = () => {
	return (
		<section className="Section2">
		<div className="greenTrace"></div>
			<div className="advancedStatistics">
				<h1>Advanced Statistics</h1>
				<p>Track how your links are performing
				across the web with our advanced statitistics
				dashboard.</p>
			</div>
			<IconComponents/>
		</section>
	)
}

export default Section2