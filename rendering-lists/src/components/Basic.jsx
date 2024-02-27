import React from "react";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const itemList = people.map((person) => <li className="bg-teal-500 rounded px-2">{person}</li>);
// object return

function Basic() {
  return <ul className="flex flex-col gap-2 mt-2"> {itemList} </ul>;
}

export default Basic;
