// import React, { useEffect, useState } from 'react'
// import  styled from 'styled-components'
// import { BsSave } from "react-icons/bs"
// import img from "../components/assest/img.jpg"
// import { GrFormView } from "react-icons/gr"
// import { useQuery } from '@tanstack/react-query'
// import { readBlog , readUserBlog} from "../utils/blogAPI"
// import { readOneUser} from "../utils/authAPI"
// import { Link } from 'react-router-dom'
// import Header from '../components/static/Header'

// interface iProps {
//     id?: string
// }

// const UserProfile: React.FC<iProps> = ({ id }) => {
//     const [user, setUser] = useState<any>({})
//     console.log(id)

//     const getUser = () => {
//         if (!id) {
//             return
//         }
//         readOneUser(id!).then((res) => {
//             setUser(res)
//         })
//     }
//     useEffect(() => {
//         getUser()
//     })



//     return <div>
//         <Top >
//             {/* <Avatar src={user?.avatar ? user?.user : img} /> */}
//             <Name>{user.userName ? user.userName : "Ogunbiyi Amidat"}</Name>
//         </Top>
//     </div>
// }



// const HomeScreen = () => {

//     const { data: post } = useQuery({
//         queryKey: ['blog'],
//         queryFn: readBlog,
//         refetchInterval: 1000
//     })


//     return (
//         <div>
//           <Header />
//             <Container>
//                 <Main>

//                     {
//                         post?.map((props: any) => (
//                             <Mid key={props._id} to={`/${props._id}/read`}  >
//                                 <Left>
//                                     <UserProfile id={props.userID} />

//                                     <Title>{props.title}</Title>
//                                     <Sub>{props.content}</Sub>
//                                     <Bottom>
//                                         <div>
//                                             <Date></Date>
//                                             <Dot />
//                                             <Read>2 min read</Read>
//                                             <Dot />
//                                             <Category>{props.category}</Category>
//                                         </div>
//                                         <Icon />
//                                     </Bottom>
//                                 </Left>
//                                 {/* <Image src={props.image ? props.image : img} /> */}
//                             </Mid>
//                         ))
//                     }
//                 </Main>
//             </Container>
//         </div>
//     )

// }

// export default HomeScreen 

// const Image = styled.img`
// object-fit: cover;
// width: 200px;
// height: 200px;
// border-radius: 5px;
// background-color: purple;
// margin-left: 20px;
// `

// const Icon = styled(BsSave)`
// font-size: 25px;
// opacity: 0.7
// `

// const Read = styled.div`
//  margin-left: 10px
// `

// const Date = styled.div``
// const Category = styled.div`
// padding: 8px 10px;
// border-radius: 50px;
// background-color: #e8e7e7;
// margin-left: 10px;
// text-transform: capitalize;
// `
// const Dot = styled.div`
// width:5px;
// height:5px;
// border-radius: 50%;
// background-color: silver;
// margin-left: 10px;
// `

// const Bottom = styled.div`
// display:flex;
// align-items: center;
// justify-content: space-between;
// font-size: 13px;

// div{
//     display:flex;
//     align-items: center;
   
// }
// `

// const Sub = styled.div`
// font-size: 18px;
// width: 400px;
// margin-bottom: 15px;
// color: #555454
// `

// const Title = styled.div`
// font-weight: 700;
// font-size: 23px;
// max-width: 400px;
// letter-spacing: 1px;
// line-height: 1.1;
// margin-bottom: 10px;
// `

// const Left = styled.div``

// const Mid = styled(Link)`
// display:flex;
// align-items: center;
// min-height: 230px;
// margin: 20px 0;
// text-decoration: none;
// color: black
// `


// const Name = styled.div`
// font-size: 13px;
// margin-left: 7px;
// font-weight: bold
// `

// const Avatar = styled.img`
// object-fit: cover;
// width: 30px;
// height: 30px;
// border-radius: 50%;
// background-color: 
// `

// const Top = styled.div`
// display: flex;
// align-items: center;
// margin-bottom: 10px
// `

// const Main = styled.div`

// `

// const Container = styled.div`
// /* width: 300px; */

// `

import React from 'react'
import Header from '../components/static/Header'
import CardProps from '../components/static/CardProps'
// import image from "../components/assest/image2.jpg"
import image from "../components/assest/Image.jpeg"
import img from "../components/assest/img.jpg"
import styled from 'styled-components'
import HeroPage from './HeroPage'
import Footer from '../components/static/Footer'

const HomeScreen = () => {
  return (
    <div>
      <Header />
    <CardHolder>
      <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={image} color='pink'  />
      <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='blue' />
      <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='blue' />
      <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='blue' />
      <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='blue' />
    </CardHolder>
  <HeroPage />
 <HomeHolder>
 <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='pink'  />
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='green' />
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='gold' />
 </HomeHolder>
  
 <HomeHolders>
 <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='pink'  />
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='green' />
 </HomeHolders>
 <Button>Load more</Button>
<DownHolder>
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='green' />
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='green' />
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='green' />
  <CardProps  Text='You have to fight to reach ' smallText='Megan Anderson' img={img} color='green' />
</DownHolder>
 <Footer />
    </div>
  )
}

export default HomeScreen

const DownHolder = styled.div`
  display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;`

const Button = styled.div`
   width: 160px;
    height: 50px;
    background-color: #1300e3;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
   



`
const HomeHolders = styled.div`
   display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;
`
const HomeHolder = styled.div`
  display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;

`
const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center;
`