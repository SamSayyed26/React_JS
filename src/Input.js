import React, { useState } from "react";

export function Input() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}

      <input type="text" onChange={getData}></input>
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}

