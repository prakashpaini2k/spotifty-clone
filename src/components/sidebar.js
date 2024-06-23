import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../assets/spotifyIcon.svg'
import { IoList,IoSearch } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import Library from './library';
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants';

const Sidebar = () => {
  const [{},dispatch] = useStateProvider();
  const [showlibrary,setShowLibrary] = useState(true)
  const handleclick = (val)=>{
    dispatch({type:reducerCases.SET_APPSTATE,appState:val})
  } 
  const handleToggle = ()=> {
      setShowLibrary(!showlibrary)
  }
  return (
    <Container>
      <div className='sidebar'>
        <div className='sidebar__logo'>
          <img src={img} alt='logo' />
        </div>
        <div className='sidebar__links'>
          <ul>
            <li onClick={()=>{handleclick('home')}}> <MdHome /> Home</li>
            <li onClick={()=>{handleclick('search')}}> <IoSearch /> Search</li>
            <li onClick={handleToggle}> <IoList /> Library</li>
          </ul>
        </div>
        {showlibrary && <Library></Library>}
      </div>
    </Container>
  )
}
const Container = styled.div`
background-color:#121212;
border-radius:8px;
.sidebar{
    display:flex;
    flex-direction:column;
    gap:1.25rem;
    padding:1rem;
}
.sidebar__logo{
    img{
        height:45px;
    }}
.sidebar__links{
    img{
        height:30px;
        width:30px;
    }}
ul{
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    padding:.5rem;
    margin:0;
    li{ 
        display:flex;
        align-items:center;
        gap:1rem;
        font-size:1rem;
        font-weight:bold;
        cursor:pointer;
        color:#a7a7a7;
        &:hover{
            cursor:pointer;
            color:white;
        }
        svg{
            scale:1.5;
        }
    } 
}
`
export default Sidebar