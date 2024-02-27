import React from "react";
import { people } from "../data/people.js";
import { getImageUrl } from "../data/utils";

const chemists = people.filter((person) => person.profession === "chemist");
const listItems = chemists.map((person) => (
  <li className="flex gap-2">
    <img src={getImageUrl(person)} alt={person.name} className="rounded-full" />
    <p>
      <b>{person.name}</b>
      {" " + person.profession + " "}
      known for {person.accomplishment}
    </p>
  </li>
));

function Advanced() {
  return (
    <>
      <p className="font-bold bg-yellow-500 rounded p-2 mt-2">
        List of chemist peoples only
      </p>
      <ul className="mt-2 flex flex-col gap-3">{listItems}</ul>

      <p className="font-bold bg-indigo-500 rounded p-2 text-white mt-2 mb-2">
        List of all peoples
      </p>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
              className="rounded-full"
            />
            <p>
              <b>{person.name}</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Advanced;
