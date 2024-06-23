import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
import { useStateProvider } from '../utils/StateProvider'
import Table from './table'
import List from './list'

const Profile = () => {
    const [{ token,userTopArtists, userTopTracks }, dispatch] = useStateProvider();
    useEffect(() => {
        const getTopArtist = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },  
               
            })
            const { items } = response.data
            const userTopArtists = items.map((item) => {
                return { name: item.name, id: item.id, images: item.images }
            })
            dispatch({ type: reducerCases.SET_TOP_ARTISTS, userTopArtists })
        }
        const getTopTrack = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
            const { items } = response.data
            const userTopTracks = items.map((item) => {
                return { name: item.name, id: item.id, images: item.album.images, artist:item.artists[0].name,album: item.album.name, duration: (item.duration_ms / 1000) }
            })
            dispatch({ type: reducerCases.SET_TOP_TRACKS, userTopTracks })
        }
        
        getTopTrack();
        getTopArtist();
    }, [token,dispatch])
    return (
        <Container>
                <h3>Top Artists</h3>
                <List data={userTopArtists}></List>
                <h3>Top Tracks</h3>
                <Table data={userTopTracks}></Table>
              
        </Container>
    )
}
const Container = styled.div`
    h4{
        margin-top:0;
    }
    .list__row img{
        border-radius:50%;
    }   

`

export default Profile