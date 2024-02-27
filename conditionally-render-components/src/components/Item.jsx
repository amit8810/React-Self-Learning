import React from "react";

function Item(props) {

    // if(props.isPacked) {
    //     return null;
    // }

    if(props.isPacked) {
        return <li>{props.name} ✔️</li>
    }

    return <li>{props.name} ❌</li>;
}

export default Item;