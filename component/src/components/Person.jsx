import React from "react";

const Data = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    city: "New York",
    hobbies: ["Reading", "Hiking"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    city: "San Francisco",
    hobbies: ["Painting", "Cooking"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 28,
    city: "Los Angeles",
    hobbies: ["Gaming", "Traveling"],
  },
];


function Person() {
  return (
    <>
      {Data.map((person) => (
        <div className="">
          <div key={person.id} className="">
            <h2>Name: {person.name}</h2>
            <p>Age: {person.age}</p>
            <p>City: {person.city}</p>
            <p>Hobbies: {person.hobbies.join(", ")}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Person;
