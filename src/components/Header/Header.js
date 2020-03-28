import React,{useState} from 'react'
import './Header.scss'
import Hamburger from './Hamburger/Hamburger'
import NavBarMobile from './NavBar/NavBarMobile'
import NavBarDesktop from './NavBar/NavBarDesktop'
const Header = () => {
	var [checked,setChecked]=useState(false)
	var List=()=>{
	return(
		<>
			<ul>
				<li><a href="#">Features</a></li>
				<li><a href="#">Pricing</a></li>
				<li><a href="#">Resources</a></li>
			</ul>
			<ul>
				<li>Login</li>
				<li className="signIn"><button><a href="#">Sign Up</a></button></li>
			</ul>
			</>
		)
}
	return (
		<header>
		<nav>
			<a href="#"><span>Shortly</span></a>
			<Hamburger setCheck={()=>setChecked(!checked)}/>
			<NavBarMobile list={<List/>} checked={checked}/>
			<NavBarDesktop list={<List/>}/>
		</nav>
		<img src="./images/illustration-working.svg" alt="illustration-working"/>
		<section>
			<h1>More than just shorter links</h1>
			<p>Build your brand's recognition and get detailed
			insights on how your links are performing.</p>
			<button>Get Started</button>
		</section>
		</header>
	)
}

export default Header