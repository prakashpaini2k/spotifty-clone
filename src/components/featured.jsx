import React,{ useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
import styled from 'styled-components'
import List from './list'

const Featured = () => {
    const [{ token,featuredAlbums,featuredPlaylists}, dispatch] = useStateProvider();
    useEffect(() => {
      const getFeaturedPlaylist = async () => {
        const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          }
        })
        const { playlists } = response.data
        const featuredPlaylists = playlists.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            images: item.images,
            href : item.href,
            type: 'playlist',
          }
        })
        dispatch({type: reducerCases.SET_FEATURED_PLAYLISTS, featuredPlaylists })
      }
      // getFeaturedPlaylist()

      const getFeaturedAlbums = async () => {
        const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json", }

        })
        const { albums } = response.data
        const featuredAlbums = albums.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            images: item.images,
            href : item.href,
            type: 'album',
          }
        })
        dispatch({ type: reducerCases.SET_FEATURED_ALBUMS, featuredAlbums })
      }
      getFeaturedAlbums()
    }, [token,dispatch])
  return (
    <Container>
    {/* <h3>Featured Playlists</h3> */}
    {/* <List data={featuredPlaylists}></List> */}
    <h3>Featured Albums</h3>
    <List data={featuredAlbums}></List>
  </Container>
  )
}
const Container = styled.div``

export default Featured