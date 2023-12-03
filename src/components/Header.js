import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const Header = (props) => {

	const handleAuth = () => {
		auth.signInWithPopup(provider).then((res) => {
			console.log(res);
		}).catch((err) => {
			alert(err.message)
		})
	} 
  return (
    <Nav>
      <Logo>
				<img src='/images/logo.svg' alt='disney+' />
			</Logo>
			<NavMenu>
				<a href='home'>
					<img src='/images/home-icon.svg' alt='HOME'/>
					<span>HOME</span>
				</a>
				<a href='home'>
					<img src='/images/search-icon.svg' alt='SEARCH'/>
					<span>SEARCH</span>
				</a>
				<a href='home'>
					<img src='/images/watchlist-icon.svg' alt='WATCHLIST'/>
					<span>WATCHLIST</span>
				</a>
				<a href='home'>
					<img src='/images/original-icon.svg' alt='ORIGINALS'/>
					<span>ORIGINALS</span>
				</a>
				<a href='home'>
					<img src='/images/movie-icon.svg' alt='MOVIES'/>
					<span>MOVIES</span>
				</a>
				<a href='home'>
					<img src='/images/series-icon.svg' alt='SERIES'/>
					<span>SERIES</span>
				</a>
			</NavMenu>
			<Login onClick={handleAuth}>Login</Login>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 70px;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	letter-spacing: 16px;
	padding: 0 36px;
	z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
	  width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
	align-items: center;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	margin: 0px;
	padding: 0px;
	position: relative;
	margin-right: auto;
	margin-left: 25px;

  a {
    display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
			min-width: 20px;
			width: 20px;
			z-index: auto;
		}
	
		span {
			color: #EAF0F1;
			font-size: 13px;
			letter-spacing: 1.42px;
			line-height: 1.08;
			padding: 5px 2px;
			white-space: nowrap;
			position: relative;

			&:before {
				background-color: #EAF0F1;
				border-radius: 0px 0px 4px 4px;
				bottom: -6px;
				content: "";
				height: 2px;
				left: 0px;
				opacity: 0;
				position: absolute;
				right: 0px;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 0.3s ease 0s;
				visibility: hidden;
				width: auto;
			}
		}
		&:hover {
      span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
  }
`;

const Login = styled.a`
  background-color: black;
	letter-spacing: 1.5px;
	border: 1px solid white;
	padding: 10px 15px;
	border-radius: 4px;
	text-transform: uppercase;
  transition: all 0.3s ease 0s;

	&:hover {
		background-color: white;
		color: black;
		border-color: transparent;
    cursor: pointer;
	}
`;

// @media (max-width: 768px){
// 	display: none;
// }
export default Header