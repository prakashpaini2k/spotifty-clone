import React, { useEffect } from 'react'
import Navbar from './navbar'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import Featured from './featured'
import Category from './category'
import Profile from './profile'

const Body = () => {
  const [{appState},dispatch] = useStateProvider();
  useEffect(() => {},[dispatch])
  return (
    <Container>
      <div className='navbar'>
        <Navbar>navbar</Navbar>
      </div>
      <div className='body'>
        {appState === 'home' && <Featured></Featured>}
        {appState === 'search' && <Category></Category>}
        {appState === 'profile' && <Profile> </Profile>}
      </div>
    </Container>
  )
}

const Container = styled.div`
background-color:#121212;
border-radius:8px;
.body{
    padding:1rem;
    height:calc(100dvh - 200px);
    overflow-y:auto;
    &::-webkit-scrollbar{
        width:10px;
        height:10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#292929;
        border-radius:4px;
        padding:1rem;
    }
}
}
`
export default Body