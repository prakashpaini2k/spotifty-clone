import React,{useEffect} from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants';
import Banner from './banner'
const Track = () => {
  const [{ token,contentHref,currentTrack }, dispatch] = useStateProvider();
  useEffect(()=>{
    const getTrackInfo = async (href) => {
      const response = await axios.get(href, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const track = {
        id: response.data.id,
        name: response.data.name,
        album: response.data.album.name,
        albumHref: response.data.album.href,
        artists : response.data.artists,
        artistName: response.data.artists[0].name,
        duration: response.data.duration_ms,
        href: response.data.href,
        images: response.data.album.images,
        type:'song'
      };
      
      dispatch({ type: reducerCases.SET_CURRENT_TRACK, currentTrack: track });
    }
    getTrackInfo(contentHref)

  }, [token,contentHref,dispatch])

  return (
    <>
      <Banner data={currentTrack}></Banner>
    </>
  )
}

export default Track