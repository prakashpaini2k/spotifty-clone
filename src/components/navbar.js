import React from 'react'
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'


const Navbar = () => {
  const [{ userInfo,appState },dispatch] = useStateProvider();
  const handleClick = () => {
    dispatch({type:reducerCases.SET_APPSTATE,appState:'profile'})
  }
  return (
    <Container>
      <div onClick={handleClick} className='profile'>
        <CgProfile />
        <span>{userInfo?.userName}</span>
      </div>
      {appState === 'search' && 
      (<div className='search'>
        <div className='icon'>
          <IoSearch />
        </div>
        <input type='text' placeholder='Search' />
      </div>)}
      {appState === 'home' && (
        <h3>Home</h3>
      )}
      {appState === 'profile' && (
        <h3>Profile</h3>
      )}
    
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
    top:22px;
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
    margin:.5rem 0;
  } 
}
  .profile{
    display:flex;
    cursor:pointer;
    align-items:center;
    gap:.5rem;
    padding: .5rem 1rem ;
    border-radius:2rem;
    background-color:#242424;
    span{
      font-weight:bold;
    }  
      svg{
        cursor:pointer;
        scale:1.2;
      }

  }
`
export default Navbar