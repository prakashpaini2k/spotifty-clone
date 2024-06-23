
import React,{useEffect} from 'react';
import './App.css';
import  Login  from './components/login';
import  Main  from './components/main';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/constants';

function App() {
    const [{token},dispatch] = useStateProvider()
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const token = hash.substring(1).split("&")[0].split("=")[1];
            dispatch({type:reducerCases.SET_TOKEN,token})
        }
    },[token,dispatch]) 
    return (
        <div>
            {token ? <Main/> : <Login/>}
        </div>
    );
}

export default App
