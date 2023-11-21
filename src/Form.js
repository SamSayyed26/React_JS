import { useState } from "react";

function FormFunction() {
  const [name, setName] = useState(false);
  const [tnc, setTnc] = useState(false);
  const [movies, setMovie] = useState(false);

  function getFormData(e) {
    e.preventDefault();
    console.log("Values: ", name, tnc, movies);
  }
  return (
    <div className="App">
      <h1>Forms in React</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>{" "}
        <br /> <br />
        <select onChange={(e) => setMovie(e.target.value)}>
          <option>Select an Option</option>
          <option>Marvel</option>
          <option>Interstellar</option>
          <option>Oppenheimer</option>
          <option>Fast and Furious</option>
        </select>
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and Conditions</span>
        <br /> <br />
        <button type="text">Submit</button>
      </form>
    </div>
  );
}

export default FormFunction;
