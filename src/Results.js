import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>no pets found...</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
