import React,{useEffect} from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'
import Banner from './banner'
import List from './list'
import Table from './table'
const Artist = () => {
  const [{ token,contentHref,artistInfo,artistTopTracks,artistAlbums }, dispatch] = useStateProvider();
  
  useEffect(() => {
    const getArtistInfo = async () => {
      const response = await axios.get(contentHref, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      const { name, images, genres, followers, popularity } = response.data
      const artistInfo = {
        name,
        images,
        genres,
        followers,
        popularity,
        type: 'artist'
      }
      dispatch({ type: reducerCases.SET_ARTIST_INFO, artistInfo })
    }
    getArtistInfo()
    const getArtistTopTracks = async () => {
      const response = await axios.get(`${contentHref}/top-tracks`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      const { tracks } = response.data
      const artistTopTracks = tracks.map((track) => {
        return{
        id: track.id,
        name: track.name,
        album: track.album.name,
        artists: track.artists[0].name,
        albumHref: track.album.href,
        href: track.href,
        duration: track.duration_ms,
        images: track.album.images,
        type: 'song',
        }})
      dispatch({ type: reducerCases.SET_ARTIST_TOP_TRACKS, artistTopTracks })
    }
    getArtistTopTracks() 
    const getArtistsAlbums = async () => {
      const response = await axios.get(`${contentHref}/albums`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      const { items } = response.data
      const artistAlbums = items.map((album) => ({
        id: album.id,
        name: album.name,
        images: album.images,
        release_date: album.release_date,
        type: 'album',
        href: album.href,
      }))
      dispatch({ type: reducerCases.SET_ARTIST_ALBUMS, artistAlbums })
    }
    getArtistsAlbums()


  }, [token, contentHref, dispatch])

  return (
    <>
      <Banner data={artistInfo}></Banner>
      <h3>Popular</h3>
      <Table  data={artistTopTracks}></Table>
      <h3>Featuring</h3>
      <List data={artistAlbums}></List>
      </>
  )
}

export default Artist