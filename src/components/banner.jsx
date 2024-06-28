import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'

const Banner = (props) => {
    const { data } = props;
    const [ , dispatch] = useStateProvider();
    const secondsToMinutes = (duration) => {
        const minutes = Math.floor(duration / 60000);
        const seconds = (duration % 60).toFixed(0);
        return minutes + ':' + (seconds < 10? '0' : '') + seconds;;
    }
    const handleClick = (href,type) => {
        dispatch({type: reducerCases.SET_APPSTATE,contentHref:href,appState:type})
    }
 
    return (
        <Container>
            <div className="banner">
                {(data?.images[1]?.url || data?.images[0]?.url) && 
                    <img className={data?.type} width={120} height={120} src={data?.type === ('profile' || 'artist')  ? data?.images[1]?.url : data?.images[0]?.url} alt="img" />
                }
                <div className="desc">
                    <div>{data?.type}</div>
                    <h1>{data?.name}</h1>
                    {data?.description && <p>{data?.description}</p>}
                    {data?.type !== 'song' &&
                        <div  className="info">
                            {data?.owner && <span>{data?.owner}</span>}
                            {data?.followers && <span>· {data?.followers.total} followers</span>}
                            {data?.tracks && <span>· {data?.tracks.length} songs</span>}
                        </div>
                    }
                    {data?.type === 'song' &&
                        <div  className="info">
                            {data?.artist && <span className='artist' onClick={() => { handleClick(data?.artistHref,'artist') }}>{data?.artist}</span>}
                            {data?.album && <span className='album' onClick={() => { handleClick(data?.albumHref,'album') }}>· {data?.album}</span>}
                            {data?.duration && <span>· {secondsToMinutes(data?.duration)}</span>}
                        </div>
                    }
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
 .banner{
    display:flex;
    gap:1rem;
    *{
        margin:0;
    }
    .desc{
      display:flex;
      flex-direction:column;
      gap:.75rem;

      div:first-child{
        text-transform:capitalize;
      }
    }
    h1{
        font-size:3rem;
        line-height:3rem;

    }
    p{
        font-size:1.2rem;
    }
    .info{
        display:flex;
        align-items:center;
        gap:.25rem;
    }
    .artist,.album{
        cursor:pointer;
        &:hover{
            text-decoration:underline;
        }
    }
    img{
      align-self:end;
      &.profile,&.artist{
         border-radius:50%;
    }
    }
  }
`

export default Banner