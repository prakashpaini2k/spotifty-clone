import React from 'react'
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'


const Navbar = () => {
  const [{ userInfo,appState },dispatch] = useStateProvider();
  const handleClick = () => {
    dispatch({type:reducerCases.SET_APPSTATE,appState:'profile'})
  }
  return (
    <Container>
      <div title={userInfo?.name} onClick={handleClick} className='profile'>
        <img src={userInfo?.images[0].url} alt="profile" />
      </div>
      {appState === 'search' && 
      (<div className='search'>
        <div className='icon'>
          <IoSearch />
        </div>
        <input type='text' placeholder='Search' />
      </div>)}
    </Container>
  )
}
const Container = styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:space-between;
align-items:center;
padding:1rem;
.search{
  position:relative;
  .icon{
    position:absolute;
    scale:1.3;
    top:14px;
    left:14px;
    cursor:pointer;
  }
  input{
    width:30vw;
    height:30px;
    border:none;
    border-radius:2rem;
    background-color:#242424;
    color:white;
    padding:.5rem 1rem .5rem 3rem;
    margin:0;
  } 
}
  .profile{
    display:flex;
    cursor:pointer;
    padding: .5rem ;
    border-radius:2rem;
    background-color:#242424;
    span{
      font-weight:bold;
    }  
      img{
        height:20px;
        width:20px;
        border-radius:50%;
        object-fit:cover;
        cursor:pointer;
        scale:1.2;
      }

  }
  h3{
    margin:0;
  }
`
export default Navbar