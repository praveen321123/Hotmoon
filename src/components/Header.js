import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <Logo>
				<img src='/images/logo.svg' alt='disney+' />
			</Logo>
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
`

export default Header