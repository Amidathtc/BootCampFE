import React from 'react'
import styled from 'styled-components'
import img from "../assest/img.jpg"

interface iCard {
    img ? : any;
    Text? : string;
    color? : string;
    smallText ? : string;
}

const CardProps: React.FC<iCard>= ({ img, Text, color, smallText}) => {
  return (
    <div>
      <Container>
        <Main>
            <Card>
               
           <Img  src = {img}/>
           <TextHolder>
           <BigText>{Text}</BigText>
            <SmallText>{smallText}</SmallText>
           </TextHolder>
            </Card>
        </Main>
      </Container>
    </div>
  )
}

export default CardProps


const TextHolder  =styled.div`
`
const Img = styled.img`
    width: 220px;
height: 25vh;
border-radius: 15px;
margin-top: 10px;

`
const Card = styled.div`
width: 220px;
height: 40vh;
background-color: rgb(215,248,254);
border-radius: 20px;
padding: 15px 15px 15px 15px;

/* margin-top: 20px; */
`

const Container = styled.div`
display:flex;
justify-content: center;
width: 100%;
height: 90vh;


`
const Main = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100%;

`
const BigText = styled.div`
color : rgb(67, 98, 120);
font-size: 20px;
font-weight: bold;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
const SmallText = styled.div`
font: 100;
color : rgb(67, 98, 120);
display: flex;
flex-direction: column;
align-items: center;
`