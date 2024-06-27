import React from 'react'
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'

const Card = (props) => {
    const { data } = props;
    const [, dispatch] = useStateProvider();
    const handleClick = (href, type) => {
        dispatch({type: reducerCases.SET_APPSTATE,contentHref:href,appState:type})
    }
    return (
        <Container>
                <li key={data?.id}> 
                    <img width={40} src={data?.images[1]?.url ? data?.images[1]?.url : data?.images[0]?.url} alt={'img'} />
                    <div className="desc">
                        <div onClick={() => { handleClick(data?.href, data?.type) }} className='title'> {data?.name} </div>
                        <div onClick={() => { handleClick(data?.artistHref,'artist') }} className="artist"> {data?.artist}</div> 
                    </div>
                </li>
        </Container>
    )
}
const Container = styled.div`
 li{
        font-weight:normal !important;
        padding:.5rem;
        border-radius :8px;
        list-style:none;
        
        &:hover{
            background-color: #292929;
        }
    }
    .img{
        border-radius:50%
    }   
    .desc{
        display:flex;
        flex-direction:column;
        gap:2px;
    }    
    .artist{
        color:#a7a7a7;
        font-size:14px
    }    
    .title,.artist{
        &:hover{    
            text-decoration:underline;
        }
    }
`

export default Card