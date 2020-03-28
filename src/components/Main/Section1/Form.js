import React,{useState} from 'react'
import './Form.scss'
const Form = ({setStorage}) => {
	var [emptyInput,setEmptyInput]=useState()
	async function sendLink(e){
		e.preventDefault()
		var link=`https://${emptyInput}`
		var value=await fetch(`https://rel.ink/api/links/?url=${link}`,{method:'POST',
			headers: 
			{
				"Content-Type": "application/json"
			},
			body:JSON.stringify({url:link})

		})
		var resData=await value.json()
		if(resData.url[0]==="Enter a valid URL."){
			setEmptyInput('')
			return
		}

		var links=[]
		if(localStorage.getItem('links')===null){
			links.push({url:resData.url,shortUrl:'rel.ink'+resData.hashid})
			localStorage.setItem('links',JSON.stringify(links))			
		}else{
			links=JSON.parse(localStorage.getItem('links'))
			links.push({url:resData.url,shortUrl:'rel.ink'+resData.hashid})
			localStorage.setItem('links',JSON.stringify(links))
		}
		setStorage(JSON.parse(localStorage.getItem('links')))
	}
	return (
		<form onSubmit={(e)=>sendLink(e)}>
			<input className={emptyInput===""?"error":""}
			onBlur={(e)=>setEmptyInput(e.target.value)}
			onChange={(e)=>setEmptyInput(e.target.value)}
			type="text"
			placeholder="Shorten a link here..."/>
			{emptyInput===""?<span>Please add a link</span>:""}
			<button>Shorten It!</button>
		</form>
	)
}

export default Form