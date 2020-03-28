import React,{useState} from 'react'
import Form from './Form'
import ShortenLinks from './ShortenLinks'
const Section1 = () => {
	var [storage,setStorage]=useState(localStorage.getItem('links')===null?null:JSON.parse(localStorage.getItem('links')))
	return (
		<section className="Section1">
			<Form setStorage={setStorage}/>
			{storage===null?'':storage.map((a,b)=>{
			return a.url===undefined?'':<ShortenLinks url={a.url} key={b} shortenUrl={a.shortUrl}/>		
			})}
		</section>
	)
}

export default Section1