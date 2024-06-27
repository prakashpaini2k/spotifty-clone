import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import SpotifyWebPlayer from 'react-spotify-web-playback'

const Footer = () => {
  const [{ token, currentTrackUri,isPlaying }] = useStateProvider();
  const playerStyles = {
    bgColor:'#000',
    color : '#fff',
    sliderTrackColor :'#a7a7a7',
    sliderColor:'#1ed760',
    sliderHandleColor:'#fff',
    trackArtistColor: '#fff',
    trackNameColor: '#fff'
  }

  return (
    <Container>
      <div className='footer'>
        <SpotifyWebPlayer  token={token} play={isPlaying} initialVolume={0.25} hideAttribution={true} styles={playerStyles} uris={[currentTrackUri]}></SpotifyWebPlayer>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position:fixed;
  bottom:0;
  height:75px;
  width:calc(100vw - 1rem);
  padding:.5rem;
  margin-left:-.5rem;
  background-color:#000;
  .footer{
    display:grid;
    grid-template-columns:1fr;
    gap:1rem;
  }
  .PlayerRSWP{
    *{
      text-decoration:none !important;
    }
  }
`

export default Footer