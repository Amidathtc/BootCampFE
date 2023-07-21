import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <NavHolder>
        <Nav>Home</Nav>
        <Nav>Features</Nav>
         <Nav>Story</Nav>
          </NavHolder>
        </Main>
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div``
const Main = styled.div``
const Nav = styled.div``
const NavHolder = styled.div`
display: flex;
justify-content: space-between;
align-items: center`

