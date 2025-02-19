import React,{useEffect} from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants';
import Banner from './banner'
import Table from './table'

const Track = () => {
  const [{ token,contentHref,currentTrack, recommendedTracks }, dispatch] = useStateProvider();
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
        artist: response.data.artists[0].name,
        artistId : response.data.artists[0].id,
        artistHref: response.data.artists[0].href,
        duration: response.data.duration_ms,
        href: response.data.href,
        images: response.data.album.images,
        type:'song'
      };
    
      dispatch({ type: reducerCases.SET_CURRENT_TRACK, currentTrack: track });
    }
    getTrackInfo(contentHref)
  }, [token,contentHref,dispatch])

  useEffect(()=>{
    const setRecommendedTracks = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_artists=${currentTrack?.artistId}&seed_tracks=${currentTrack?.id}&limit=10`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const tracks = response.data.tracks.map((item) => ({
        id: item.id,
        name: item.name,
        album: item.album.name,
        albumHref: item.album.href,
        artist: item.artists[0].name,
        artistHref: item.artists[0].href,
        duration: item.duration_ms,
        href: item.href,
        images: item.album.images,
        type:'song'
      }));
      dispatch({ type: reducerCases.SET_RECOMMENDED_TRACKS, recommendedTracks: tracks });
      
    }
    // if(currentTrack?.id){
    //   setRecommendedTracks()
    // }
    
  },[currentTrack,token,dispatch])

  return (
    <>
      <Banner data={currentTrack}></Banner>
      <br></br>
      {/* <h3>Recommended</h3>
      <Table data={recommendedTracks}></Table> */}
    </>
  )
}

export default Track