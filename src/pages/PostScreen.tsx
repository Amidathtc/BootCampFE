import React from 'react'
import styled from 'styled-components'
import image from "../components/assest/Image.jpeg"

const PostScreen = () => {
  return (
    <div>
      <Container>
        <Main>
            <Right>
   <ImageHolder>
  <img src= {image} />
   </ImageHolder>
            </Right>
            <Left>
      <TextHolder>
        <BigText>
    Don't Be Afraid
        </BigText>
        <SmallText>

        </SmallText>

      </TextHolder>
            </Left>
        </Main>
      </Container>
    </div>
  )
}

export default PostScreen

const Container = styled.div``
const Main = styled.div``
const Right = styled.div``
const Left = styled.div``
const ImageHolder = styled.div`
width: 25%;
border-radius: 20px;
height: 15%;
`
const SmallText = styled.div``
const TextHolder = styled.div``
const BigText = styled.div``
