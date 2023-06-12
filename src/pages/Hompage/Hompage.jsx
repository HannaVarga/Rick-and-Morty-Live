import React, {useEffect, useState} from 'react'
import './Hompage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Hompage() {
    // create state for characters 
    const[characters, setCharacters]= useState([])
    // https://rickandmortyapi.com/api/character
    // I need to get data from api when the page loads 
    axios.get(`https://rickandmortyapi.com/api/character`).then(res=>{

// store this data in state
setCharacters(res.data.results)
    })
    .catch(err=>console.log(err))
    useEffect(
        () => {
console.log('home page loaded')
// I need to get data from api when the page loads 
        }, [] 
        // empty array only runs on first render 
    )
  return (
    <div className='home-container'>
      <h1>Main Characters</h1>
      <div className='characters-container'>
        {
             characters.map(item=><CharacterCard key={item.id} character={item}/>)
        // characters.map(item=><p key={item.id}>{item.name}</p>)
        }
      </div>
    </div>
  )
}

export default Hompage
