import React from 'react'
import styled from 'styled-components'

const Table = (props) => {
    const {data} = props;
    const secondsToMinutes = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = (duration % 60).toFixed(0);
        return minutes + ':' + (seconds < 10? '0' : '') + seconds;;
    }
    return (
        <Container>
            <div className='grid'>
                {data && data.map(({ name, id, images, album, duration, artist }, index) => (
                    <div className='grid__row' key={id}>
                        <div className='track'>
                            <span>{index + 1}</span>
                            <img src={images[0].url} alt={name} />
                            <div className='content'>
                                <span className='title'>{name}</span>
                                <span className='artist'>{artist}</span>
                            </div>
                        </div>
                        <div className='album'>{album}</div>
                        <div className='time'>{secondsToMinutes(duration)}</div>

                    </div>))}
            </div>
        </Container>
    )
}

const Container = styled.div`
.grid{
       display:grid;
       gap:1rem;
      
        &__row{
            display:grid;
            grid-template-columns:1fr 1fr 60px;
            border-radius:6px;
            gap:1rem;
            padding:.5rem;
            &:hover{
            background-color:#242424;}

            .content{
               display:flex;
                flex-direction:column;
                gap:2px;
            }
            .title{
               color:white !important;
            }
            img{
                width:40px;
                height:40px;
            }
        } 
        .grid__row  *{
            color:#a7a7a7;
        }

        .track{
            display:flex;
            gap:1rem;
            align-items:center;
            cursor:pointer;
        }
            `

export default Table