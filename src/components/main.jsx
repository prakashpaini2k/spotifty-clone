import React, { useEffect } from 'react'
import styled from 'styled-components'
import Body from './body'
import Sidebar from './sidebar'
import Footer from './footer'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/constants'

const Main = () => {
    const [{ token}, dispatch] = useStateProvider();
    useEffect(() => {
        const getUserInfo = async () => {
            const {data} = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
            const userInfo = {
                id : data.id,
                name : data.display_name,
                images : data.images,
                type : 'profile'
            }
            dispatch({ type: reducerCases.SET_USER, userInfo})
        }
        getUserInfo()
    }, [dispatch, token])
    return (
        <Container>
            <Sidebar></Sidebar>
            <Body></Body>
            <Footer></Footer>
        </Container>
    )
}

const Container = styled.div`
    height: calc(100dvh - 90px);
    width: calc(100dvw - 1rem);
    background-color:#000;
    display:grid;
    grid-template-columns:20vw auto;
    padding:.5rem;
    gap:.5rem;

    *{
        color:white;
        img{
            border-radius:8px;
        }
        h3{
            font-size:1.25rem;
            &:first-child{
                margin-top:0;
            }
        }
        ul{
            list-style:none;
            display:flex;
            flex-direction:column;
            gap:1.5rem;
            padding:.5rem;
            margin:0;
        }
        li{ 
            display:flex;
            align-items:center;
            gap:1rem;
            font-size:1rem;
            font-weight:bold;
            cursor:pointer;
            color:#a7a7a7;
        }
                   
    }
 `


export default Main