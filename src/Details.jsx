import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import fetchPet from './fetchPet'

const Details = () => {
    const {id} = useParams();
    const results = useQuery(["details",id],fetchPet)
    if(results.isLoading) {
        return (
            <div>Details</div>
          )
        }

    const pet = results.data.pets[0]   
    
    return (
        <div>
            <div>
                <h1>{pet.name}</h1>
                <h1>{pet.animal} - {pet.breed} - {pet.city},{pet.state} </h1>
                 <button>Adopt {pet.name}</button>
                 <p>{pet.description}</p>
            </div>
        </div>
    )
        
    }
  
export default Details