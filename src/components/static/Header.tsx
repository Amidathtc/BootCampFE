import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo></Logo>
          <NavHolder>
            <NavLinks to={""}>Home</NavLinks>
            <Nav>Features</Nav>
            <Nav>Story</Nav>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
color: white;
background-color: black;
height: 80px;
width: 100%;
`

const Main = styled.div`
 width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;`

const NavHolder = styled.div`
display: flex;
font-size: larger;
  font-weight: 300;
  color: white;
  justify-content: space-between;
`
const Nav = styled.div`
display: flex;
  

`
const  Logo = styled.div``
const NavLinks = styled(NavLink)`
  text-decoration: none;
`
