import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'
import styled from 'styled-components'
import Card from './card'
import List from './list'
import TopCard from './topCard'


const Search = () => {
    const [{ token, searchResult, searchQuery }, dispatch] = useStateProvider();
    useEffect(() => {
        const getSearchResult = async () => {
            const response = await axios
                .get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track,artist,album,playlist&limit=5`, {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                })
            const searchResult = {
                tracks: response.data.tracks.items.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        artist: item.artists[0].name,
                        artistHref: item.artists[0].href,
                        images: item.album.images,
                        album: item.album.name,
                        albumHref: item.album.href,
                        href: item.href,
                        duration: item.duration_ms,
                        type: 'song'
                    }
                }),
                albums: response.data.albums.items.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        artist: item.artists[0].name,
                        artistHref: item.artists[0].href,
                        images: item.images,
                        href: item.href,
                        type: 'album'
                    }
                }),
                artists: response.data.artists.items.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        images: item.images,
                        href: item.href,
                        type: 'artist'
                    }
                }),
                playlists: response.data.playlists.items.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        images: item.images,
                        href: item.href,
                        type: 'playlist'
                    }
                })
            }
            dispatch({ type: reducerCases.SET_SEARCH_RESULT, searchResult })
        }
        if (searchQuery) {
            getSearchResult()
        }

    }, [token, searchQuery, dispatch])

    return (
        <Container>
            {searchResult && (
                <>
                    <div className="flex">
                        <div className="box1">
                            <h3>Top result</h3>
                            <TopCard data={searchResult?.tracks[0]}></TopCard>
                        </div>
                        <div className="box2">
                            <h3>Songs</h3>
                            <div className='cards'>
                                {searchResult?.tracks && searchResult.tracks.map((track) => <Card data={track} key={track.id} ></Card>)}
                            </div>
                        </div>
                    </div>
                    <h3>Artist</h3>
                    <List data={searchResult?.artists}></List>
                    <br></br>
                    <h3>Album</h3>
                    <List data={searchResult?.albums}></List>
                    <br></br>
                    <h3>Playlist</h3>
                    <List data={searchResult?.playlists}></List>
                </>
            )}
        </Container>

    )
}
const Container = styled.div`
    .flex{
        display:flex;
        flex-direction:row;
        gap:1rem;
        .box2{
            flex:1;
        }
    }
`

export default Search