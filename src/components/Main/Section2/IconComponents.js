import React from 'react'
import './IconComponents.scss'
const IconComponents = () => {
	var Icons=()=>{
		var items=[
			{img:"./images/icon-brand-recognition.svg",
			title:"Brand Recognition",
			paragraph:`Boost your brand recognition with each click. Generic
			links don't mean a thing. Branded links help instil confidence
			in your content.`
		},
		{img:"./images/icon-detailed-records.svg",
			title:"Detailed Records",
			paragraph:`Gain insights into who is clicking
			your links. Knowing when and where people
			engage with your content helps inform better
			decisions.`
		},
		{img:"./images/icon-fully-customizable.svg",
			title:"Fully Customizable",
			paragraph:`Improve brand awareness and content discoverability
			through customizable links, supercharging audience
			engagement.`
		}
		]
		return(items.map((a,i)=>{
			return<div key={i} className={'IconComponents pokemon'}>
			<div className="Icon">
				<img src={a.img} alt={a.img}/>
			</div>
			<h1>{a.title}</h1>
			<p>{a.paragraph}</p>
		</div>
		}))
	}
	return (
		<Icons/>
	)
}

export default IconComponents