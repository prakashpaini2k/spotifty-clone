import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
import styled from 'styled-components'


const Library = () => {
    const [{ token,userPlaylists,followedArtists}, dispatch] = useStateProvider();
    useEffect(() => {
        const getUserPlaylist = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
            const { items } = response.data
            const playlists = items.map(({ name, id ,images }) => {
                return { name, id, images }
            })
            dispatch({ type: reducerCases.SET_USER_PLAYLISTS, playlists })
        }
        const getFollowedArtist = async ()=>{
            const response = await axios.get('https://api.spotify.com/v1/me/following?type=artist',{
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
            const { artists } = response.data
            const followedArtists = artists.items.map(({ name, id ,images})=>{
                return { name, id, images }
            })
            dispatch({type: reducerCases.SET_FOLLOWED_ARTIST, followedArtists})

        }
        getFollowedArtist()
        getUserPlaylist()
    }, [token, dispatch])

    return (
        <Container>
            <ul>
                {userPlaylists && userPlaylists.map(({ name, id, images}) =>
                     (<li   key={id}> <img width={40} src={images[1].url} alt={'img'} /><div className='text'> {name} <strong>Artist</strong></div> </li>))}
                {followedArtists && followedArtists.map(({ name, id, images}) => 
                    (<li   key={id}> <img className='img' width={40} src={images[1].url} alt={'img'} /> <div className='text'> {name} <strong>Artist</strong></div> </li>))}
            </ul>
        </Container>
    )
}

const Container = styled.div`
height: 100%;
 ul{
    height:calc(100vh - 375px);
    overflow-y:auto;
    padding:0 !important;
    &::-webkit-scrollbar{
        width:10px;
        height:10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#292929;
        border-radius:4px;
        padding:1rem;
    }
    li{
        font-weight:normal;
        padding:.5rem;
        border-radius :8px;
        gap:.5rem;
        &:hover{
            background-color: #292929;
        }
    }
    .img{
        border-radius:50%
    }   
    .text{
        display:flex;
        flex-direction:column;
        gap:4px
    }    

    strong{
    color:#a7a7a7;
    font-size:12px
    }
}`

export default Library