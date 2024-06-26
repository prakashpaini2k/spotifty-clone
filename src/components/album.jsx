import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'
import Banner from './banner'
import Table from './table'

const Album = () => {
  const [{ token, contentHref, currentAlbum }, dispatch] = useStateProvider()
  useEffect(() => {
    const getCurrentAlbum = async (href) => {
      const response = await axios.get(href, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      const album = {
        id: response.data.id,
        name: response.data.name,
        images: response.data.images,
        type: 'album',
        tracks: response.data.tracks.items.map((item) => ({
          id: item.id,
          name: item.name,
          artist: item.artists[0].name,
          artistHref : item.artists[0].href,
          duration: item.duration_ms,
          href: item.href,
        })),
      }
      dispatch({ type: reducerCases.SET_CURRENT_ALBUM,album })
    }
    getCurrentAlbum(contentHref)
    
  }, [token, contentHref,dispatch])

  return (
    <>
      <Banner data={currentAlbum} />
      <br></br>
      <Table isAlbum={true} data={currentAlbum?.tracks} />
    </>
  )
}

export default Album