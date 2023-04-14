import React, { useState } from 'react'
const ANIMALS = ["bird","dog","rabbit","reptile"]


const SearchParams = () => {
    const [location, setLocation] = useState("seattle")
    const [animals, setAnimals] = useState("")
    const [breed, setBreed] = useState("")
    const BREEDS = []
  return (
    <div className='search-params'>
        <form>
            <label htmlFor='location'>
                Location
            <input onChange={e=>setLocation(e.target.value)} id = 'location' value = {location} placeholder='Location' />
            
            </label>
            <label htmlFor='animal'>Animals
            <select id = "animals" value = {animals} onChange={e=>setAnimals(e.target.value)}>
                {ANIMALS.map((animal)=>(
            <option key = {animal} >{animal}</option>))}
            </select>
            </label>

            <label htmlFor='breed'>Breed
            <select disabled = {BREEDS.length === 0} id = "breed" value = {breed} onChange={e=>setAnimals(e.target.value)}>
                {BREEDS.map((breed)=>(
            <option key = {breed} >{breed}</option>))}
            </select>
            </label>
            <button>Submit</button>
           
        </form>




    </div>
  )
}

export default SearchParams