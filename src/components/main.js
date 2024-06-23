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
                userid : data.id,
                userName : data.display_name,
            }
            dispatch({ type: reducerCases.SET_USER, userInfo})
        }
        getUserInfo()
    }, [dispatch, token])
    return (
        <Container>
            <Sidebar></Sidebar>
            <Body></Body>
            <div className='footer-wrapper'>
                <Footer></Footer>
            </div>
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
    }
    
    .footer-wrapper {
    position:fixed;
    bottom:0;
    height:75px;
    width:100%;
    margin-left:-.5rem;
    background-color:#000;
    } `


export default Main