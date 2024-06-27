import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/constants'

const List = (props) => {
    const { data } = props;
    const [, dispatch] = useStateProvider();
    const handleClick = (href,type) => {
        dispatch({type: reducerCases.SET_APPSTATE,contentHref:href,appState:type})
    }
    return (
        <Container> 
              <div className='list'>
                    {data && data.map(({ name,id,images,href,type }) => (
                    <div onClick={()=>{handleClick(href,type)}} className='list__row' key={id}>
                        <img className={type} src={images[0]?.url} alt={name} />
                        <span title={name}>{name}</span>
                    </div>))}
                </div>
        </Container>
    )
}
const Container = styled.div`
 .list{
        display:flex;
        flex-direction:row;
        gap:1rem;
        width:75vw;
        overflow-x:auto;
        &::-webkit-scrollbar{
            width:10px;
            height:10px;
        }
        &::-webkit-scrollbar-thumb{
            background-color:#292929;
            border-radius:4px;
            padding:1rem;
        }
    }
    .list__row{
        display:flex;
        flex-direction:column;
        gap:1rem;
        padding:1rem;
        border-radius :8px;
        &:hover{
            background-color: #292929;
        }
        img{
            width:160px;
            height:160px;
        }
    }
    .profile,.artist{
        border-radius:50%;
    }
    span{
        width:160px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }      
`

export default List