import React,{useState} from 'react'
import './ShortenLinks.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const ShortenLinks = ({url,shortenUrl}) => {
	var [copied,setCopied]=useState(false)
	return (
		<div className="shortLink">
			<div className="url">
				{url}
			</div>
			<div className="shortenUrl">
			<span>https://{shortenUrl}</span>
			<CopyToClipboard text={shortenUrl}
			onCopy={()=>setCopied(true)}>
			<button className={copied?"Copied":null} >{copied?"Copied!":"Copy"}</button>
			</CopyToClipboard>
			</div>
		</div>
	)
}

export default ShortenLinks