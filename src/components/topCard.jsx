import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'

const TopCard = (props) => {
    const {data} = props
    const [, dispatch] = useStateProvider();
    const handleClick = (href, type) => {
        dispatch({type: reducerCases.SET_CONTENT_TYPE,contentHref:href,contentType:type})
    }
  return (
    <Container>
        <div onClick={() => { handleClick(data?.href, data?.type) }} className="card">
            <img src={data?.images[0]?.url} alt="img" />
            <div className="content">
                <div className="title">{data?.name}</div>
                <div className="desc">
                    <span  className='type'>{data?.type} · </span>
                    <span onClick={() => { handleClick(data?.artistHref,'artist') }} className='artist'>{data?.artist}</span>
                </div>
            </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
    .card{
        display:flex;
        gap:1rem;
        cursor:pointer;
        flex-direction:column;
        padding:1rem;
        border-radius:8px;
        width:400px;
        &:hover{
            background-color: #292929;
        }   
        img{
            width:100px;
            height:100px;
            border-radius:8px;
        }
        .content{
            display:flex;
            flex-direction:column;
            gap:4px
        }
        .title{
            font-weight:bold;
            font-size:2rem;
        }
        .artist{
            &:hover{
                text-decoration:underline;
            }
        }
        .type{
            color:#a7a7a7;
            text-transform:capitalize;
        }
    }`
export default TopCard