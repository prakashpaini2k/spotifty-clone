import React,{useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
import { useStateProvider } from '../utils/StateProvider'
import List from './list'

const Category = () => {
    const [{ token,browseCategories }, dispatch] = useStateProvider()
    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
            console.log(response.data,'browseCategories');
            const { categories } = response.data
            const browseCategories = categories.items.map((item)=>{
                return {
                    id: item.id,
                    name: item.name,
                    images: item.icons
                }
            })

            dispatch({ type: reducerCases.SET_BROWSE_CATEGORIES, browseCategories })
        }
        
        getCategories()
    },[token,dispatch])

  return (
    <Container>
        <h3>Browse all</h3>
        <List data={browseCategories}></List>
    </Container>
  )
}

const Container = styled.div`
    h3{
        margin-top:0;
    }   

`

export default Category