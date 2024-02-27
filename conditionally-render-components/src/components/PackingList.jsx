import React from "react";
import Item from "./Item";

function PackingList() {
  return (
    <section className="">
      <h1 className="font-bold">Amit Singh Packing list</h1>
      <ul>
        <Item name="Space suit" isPacked={true} />
        <Item name="Helmet with golden leaf" isPacked={true} />
        <Item name="Photo of Tam" isPacked={false} />
      </ul>
    </section>
  );
}

export default PackingList;
