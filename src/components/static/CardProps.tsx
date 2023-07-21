import React from 'react'
import styled from 'styled-components'
import img from "../assest/img.jpg"

// interface iCard {
//     img ? : any;
//     Text? : string;
//     color? : string;
//     smallText ? : string;
// }

const CardProps = () => {
  return (
    <div>
      <Container>
        <Main>
            <Card>
               
           <Img  src = {img}/>
           <TextHolder>
           <BigText></BigText>
            <SmallText></SmallText>
           </TextHolder>
            </Card>
        </Main>
      </Container>
    </div>
  )
}

export default CardProps


const TextHolder  =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
    width: 230px;
height: 25vh;
border-radius: 8px;

`
const Card = styled.div`
width: 290px;
height: 50vh;
background-color: rgb(215,248,254);
display: flex;
border-radius: 8px;
flex-direction: column;
align-items: center;
margin-top: 10%;`

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
color : grey;
font-size: 30px;
font-weight: medium;
`
const SmallText = styled.div``