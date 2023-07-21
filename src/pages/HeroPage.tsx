import React from 'react'
import styled from 'styled-components'
import image from "../components/assest/image (3).jpg"
// import Button from '../components/common/Button'

const HeroPage = () => {
  return (
    <div>
      <Container>
     <Wrapper>
     <ImageHold>    <img src = {image} style={{width:"100%" , height: "95% " , objectFit: "cover", borderRadius : "30px"}} /></ImageHold>
        <Content>
    <Button>Creative</Button>
            <h1 style={{fontSize: "40px", fontWeight: "700"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  voluptatibus veniam exercitationem facilis reprehenderit magni deserunt est, sunt voluptas laboriosam! Eligendi quae saepe voluptate?</p>
            <Avatar></Avatar>
            <Name style={{fontSize: "20px", fontWeight: "600"}}>Victoria West, Lauren Langford</Name>
            <Dates>September 20, 2020.   <span>3 minutes read</span></Dates>
            
        </Content>
      
         
        
     </Wrapper>
      </Container>
    </div>
  )
}

export default HeroPage


const Dates = styled.div``
const Avatar = styled.div``
const Name = styled.div``
const Read = styled.div``
const Button = styled.div`
    width: 100px;
    height: 30px;
    background-color: #8f8d8d;
    border-radius: 30px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;


`
const Wrapper = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
height: 100%;


`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
`

const ImageHold= styled.div`
    width: 45%;
    border-radius: 20px;
    height: 100%;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  


  `
