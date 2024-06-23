import React from 'react'
import styled from 'styled-components'

const List = (props) => {
    const { data } = props;
    return (
        <Container> 
              <div className='list'>
                    {data && data.map(({ name,id,images }) => (
                    <div className='list__row' key={id}>
                        <img src={images[0].url} alt={name} />
                        <span>{name}</span>
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
        background-color: #292929;}
        img{
            width:160px;
            height:160px;
        }
    }   `

export default List