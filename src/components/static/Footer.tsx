import React from "react";
import styled from "styled-components";
import {FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import {IoLogoGoogle} from "react-icons/io"




const Footer = () => {

  const data:any=[
    {
      title: "About",
      item: "Features",
      item1: "Style Guide",
      item2: "Contact",
      item3: "Get Theme",
    },
    {
      title: "Features",
      item: "Account",
      item1: "Membership",
      item2: "Sign in",
      item3: "Sign up",
      
    },
    {
      title: "Support",
      item: "Authors",
      item1: "Tags",
      item2: "Dark version",
      item3: "404"
    },
 
   
  ]

  return (
    <div>
      <Container>
        <Main>
         <Wrap>
         {
          data.map((el:any)=>(
            <Holder>
            <Title>{el.title}</Title>
            <List>{el.item}</List>
            <List>{el.item1}</List>
            <List>{el.item2}</List>
            <List>{el.item3}</List>
          </Holder>
          ))
         }
         </Wrap>
         <Below>
          <Text>
            @ 2023 Okiro Learning Private Limited. All rights reserved
          </Text>
          <Social>
<Icon/>
<Icon1/>
<Icon2/>
<Icon3/>
          </Social>
         </Below>
        </Main>

      </Container>
    </div>
  );
};

export default Footer;
const Text= styled.div`
color: black;
font-size: 20px;

margin-top: 20px;
`
const Icon3=styled(FaLinkedinIn)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: black;
}

`
const Icon2=styled(IoLogoGoogle)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: black;
}
`
const Icon1=styled(FaTwitter)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: black;
}
`
const Icon=styled(FaFacebookF)`margin: 0 10px;
font-size: 23px;

:hover{
  cursor: pointer;
  transition: all 350ms;
  color: black;
}

`

const Social = styled.div`
display: flex;
color: black;
margin-top: 20px;

`
const Below = styled.div`
display: flex;
align-items: center;
height: 55px;
justify-content: space-between;
border-top: 1px solid #919285;
`
const Wrap = styled.div`
display: flex;
margin: 10px 10px;
`
const List = styled.div`
color: black;
font-size: 18px;
margin: 10px 0;

:hover{
  transition: all 350ms;
  color: black;
}
`;
const Title = styled.div`
margin-top: 50px;
margin-bottom: 20px;
font-size: 22px;
font-weight: 600;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
color: black;
`;
const Holder = styled.div`
width: 300px;
min-height: 200px;
margin: 10px 10px;
flex-direction: column;
display: flex;
`;

const Main = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 450px;
  /* background-color: #33333d; */
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  align-items: center;
`;