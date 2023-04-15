import React, { useState,useEffect } from 'react'

import Pet from './Pet'
import useBreedList from './useBreedList'
import Results from './Results'

const ANIMALS = ["bird","dog","rabbit","reptile","cat"]


const SearchParams = () => {
    const [location, setLocation] = useState("seattle")
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")
    const [pets, setPets] = useState([])
    const [breeds] = useBreedList(animal)

    useEffect(()=>{
        requestPets()

    },[])
    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )

        const json = await res.json()
        setPets(json.pets)
        console.log(pets)

    }   

  return (
    <div className='search-params'>
        <form onSubmit={e=>{
            e.preventDefault()
            requestPets()
        }}>
            <label htmlFor='location'>
                Location
            <input onChange={e=>setLocation(e.target.value)} id = 'location' value = {location} placeholder='Location' />
            
            </label>
            <label htmlFor='animal'>Animal
            <select id = "animal" value = {animal} onChange={e=>setAnimal(e.target.value)}>
                {ANIMALS.map((animal)=>(
            <option key = {animal} >{animal}</option>))}
            </select>
            </label>

            <label htmlFor='breed'>Breed
            <select disabled = {breeds.length === 0} id = "breed" value = {breed} onChange={e=>setAnimal(e.target.value)}>
                {breeds.map((breed)=>(
            <option key = {breed} >{breed}</option>))}
            </select>
            </label>
            <button>Submit</button>
            
           
        </form>
        <Results pets = {pets}/>




    </div>
  )
}

export default SearchParams