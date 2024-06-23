import React,{useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants';

// create a track component for spotify
const Track = (props) => {
  const { trackId } = props;
  const [{ token }, dispatch] = useStateProvider();
  useEffect(()=>{
    // fetch track data from spotify api
    const getTrack = async (trackId) => {
      const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
      })
    }
    getTrack();
  }, [token, trackId, dispatch])

  return (
    <div>Track</div>
  )
}

export default Track