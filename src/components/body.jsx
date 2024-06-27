import React, { useEffect } from 'react'
import Navbar from './navbar'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import Featured from './featured'
import Search from './search'
import Artist from './artist'
import Playlist from './playlist'
import Album from './album'
import Profile from './profile'
import Track from './track'

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
        {appState === 'profile' && <Profile> </Profile>}
        {appState === 'search' && <Search></Search>}
        {appState === 'artist' && <Artist></Artist>}
        {appState === 'playlist' && <Playlist></Playlist>}
        {appState === 'album' && <Album></Album>}
        {appState === 'song' && <Track></Track>}
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