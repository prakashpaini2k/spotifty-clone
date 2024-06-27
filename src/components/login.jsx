import React from 'react'
import img from '../assets/spotifyIcon.svg'
import styled from 'styled-components'

export default function Login() {
    const handleClick = () => {
        const clientId = 'e4717cbd56e4478695d623da227597f2';
        const redirectUrl = window.location.href.split('?')[0];
        const apiurl = 'https://accounts.spotify.com/authorize';
        const scopes = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-follow-read',
            'user-top-read',
            'playlist-read-private',
            'playlist-read-collaborative',
            'streaming',
            'user-library-read',
            'user-read-playback-position',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-follow-read',
            'user-top-read',
        ]

        const url = `${apiurl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
        window.location.href = url;
    }
    return (
        <>
            <Container>
                <img src={img} height='80' alt="logo" />
                <button onClick={handleClick} >Connect</button>
            </Container>
        </>
    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:2rem;
height:100vh;
width:100vw;
background-color:black;
color:white;


button{
    padding: 10px 30px;
    border-radius:99px;
    border:none;
    background-color:#1db954;
    color:black;
    font-weight:bold;
    font-size:20px;
    cursor:pointer;
}
`