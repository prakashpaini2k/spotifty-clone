import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'

const Footer = () => {
  return (
    <Container><div className='footer'>footer</div></Container>
  )
}

const Container = styled.div`
height:100%;
width:100%;
.footer{
  padding:1rem;
}
`

export default Footer