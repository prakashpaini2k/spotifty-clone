import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'


const Table = (props) => {
    const {data,isAlbum} = props;
    const [, dispatch] = useStateProvider();
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
            <div className="header">
                <div className='track'>
                    <div className='index'>#</div>
                    <div>Title</div>
                </div>
                { (!isAlbum) ? <div>Album</div> : <div></div>}
                <div>Time</div>

            </div>
            {data && data.map(({ name, id, images, album, duration, artist, href,albumHref,artistHref }, index) => (
                <div className='grid' key={id}>
                    <div className='track'>
                       <div className='index'>{index + 1}</div>
                        {images && <img src={images[0]?.url} alt={name} />}
                        <div className='content'>
                            <div onClick={()=>{handleClick(href,'song')}} className='title'>{name}</div>
                            <div onClick={()=>{handleClick(artistHref,'artist')}} className='artist'>{artist}</div>
                        </div>
                    </div>
                    <div onClick={()=>{handleClick(albumHref,'album')}} className='album'>{album}</div>
                    <div className='time'>{secondsToMinutes(duration)}</div>
                </div>))}
        </Container>
    )
}

const Container = styled.div`

      
    .grid,.header{
        display:grid;
        grid-template-columns:1fr 1fr 60px;
        border-radius:6px;
        gap:1rem;
        padding:.5rem;
        }
        .grid:hover{
            background-color:#242424;
        }
        .grid:not(:hover) * {
            color:#a7a7a7;
        }
    } 
    .header{
        padding-bottom:1rem !important;
        border-bottom : 1px solid #a7a7a7;
        border-radius :0 !important;
    }
    .index{
        width:20px;
    }      
    
    .content{
        display:flex;
        flex-direction:column;
        gap:2px;
    }
    .title,.album,.artist{
        &:hover{
            text-decoration:underline;
        }

    }    
    .title{
        color:white !important;
    }
    .grid img{
        width:40px;
        height:40px;
    }
    .track{
        display:flex;
        gap:1rem;
        align-items:center;
        cursor:pointer;
    }`

export default Table