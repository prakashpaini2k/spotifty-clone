import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'
import Banner from './banner'
import Table from './table'

const Playlist = () => {
  const [{ token, contentHref, currentPlaylist }, dispatch] = useStateProvider()
  useEffect(() => {
    const getCurrentPlaylist = async (href) => {
      const response = await axios.get(href, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      const playlist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        images: response.data.images,
        type: 'playlist',
        owner :response.data.owner.display_name,
        tracks: response.data.tracks.items.map((track) => ({
          id: track.track.id,
          name: track.track.name,
          artist: track.track.artists[0].name,
          artistHref : track.track.artists[0].href,
          album: track.track.album.name,
          albumHref: track.track.album.href,
          images: track.track.album.images,
          duration: track.track.duration_ms / 1000,
          href: track.track.href,
        })),
      }

      dispatch({ type: reducerCases.SET_CURRENT_PLAYLIST, playlist })
    }
    getCurrentPlaylist(contentHref)
  }, [token, contentHref, dispatch])


  return (
   <>
      <Banner  data={currentPlaylist}></Banner>
      <br></br>
      <Table data={currentPlaylist?.tracks}></Table>
    </>
  )
}
  
export default Playlist