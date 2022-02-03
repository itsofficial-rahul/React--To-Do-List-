import React, { useEffect } from "react";
export function User(props)
{
    console.warn(props)
    return(
        <div>
              <h1>{props.data.name}</h1>
              <h1>{props.data.age}</h1>
              <h1>{props.data.add}</h1>
        </div>
    )
}