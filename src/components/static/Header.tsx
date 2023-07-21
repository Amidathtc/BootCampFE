

import styled from "styled-components";
import {FiSearch} from "react-icons/fi"
// import Button from "../common/Button";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
     
          
          <NavWithCalltoAction>
          <Logo>Okiro</Logo>
           <NavHolder>
           <Navs>Sign Up</Navs>
            <Button>Sign In</Button>
           <Icon />
           </NavHolder>

           
           
          </NavWithCalltoAction>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Logo = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`
const NavHolder = styled.div`
  display: flex;
  /* background-color: blue; */
  justify-content: space-between;
  align-items: center;

`
const Button = styled.div`
  width: 80px;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`
const Space = styled.div`
  margin-left: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0a6fd3;
  font-size: 14px;
  /* border-bottom: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Icon = styled(FiSearch)`
width : 60px;
color: white;
`;

const NavWithCalltoAction = styled.div`
  display: flex;
  align-items: center;
  font-size: large;
  font-weight: 500;
  justify-content: space-between;
/* background-color: red; */
width: 100%;
`;

const Navs = styled.div`
  margin: 0 20px;
  color: white;
`;
