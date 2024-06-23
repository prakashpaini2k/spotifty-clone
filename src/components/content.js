import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import styled from 'styled-components'

const Content = (props) => {
  const [{ appState }, dispatch] = useStateProvider();
  const {id} = props.id;
  
  
  return (
    <div>Content</div>
  )
}

export default Content