import React, { useEffect } from 'react'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
import { useStateProvider } from '../utils/StateProvider'
import Table from './table'
import List from './list'
import Banner from './banner'

const Profile = () => {
    const [{ token, userTopArtists, userTopTracks, userInfo }, dispatch] = useStateProvider();
    useEffect(() => {
        const getTopArtist = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/top/artists?limit=10', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
            const { items } = response.data
            const userTopArtists = items.map((item) => {
                return {
                    name: item.name,
                    id: item.id,
                    images: item.images,
                    href: item.href,
                    type: 'artist',
                }
            })
            dispatch({ type: reducerCases.SET_TOP_ARTISTS, userTopArtists })
        }
        const getTopTrack = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
            const { items } = response.data
            const userTopTracks = items.map((item) => {
                return {
                    name: item.name,
                    id: item.id,
                    images: item.album.images,
                    artist: item.artists[0].name,
                    artistHref: item.artists[0].href,
                    album: item.album.name,
                    albumHref: item.album.href,
                    href: item.href,
                    duration: item.duration_ms,
                    type: 'song'

                }
            })
            dispatch({ type: reducerCases.SET_TOP_TRACKS, userTopTracks })
        }

        getTopTrack();
        getTopArtist();
    }, [token, dispatch])
    return (
        <>
            <Banner data={userInfo}></Banner>
            <h3>Top Artists</h3>
            <List data={userTopArtists} ></List>
            <h3>Top Tracks</h3>
            <Table data={userTopTracks}></Table>
        </>

    )
}

export default Profile