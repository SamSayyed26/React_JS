import { useEffect, useState } from "react";
import User from "./User";
function Hooks() {
  const [numbers, setNumbers] = useState(10);
  const [data, setData] = useState(30);
  // we can have multiple useEffect functions. The parameter at the end defines on which the useEffect should run, If not provided any value, it will run for all values.

  useEffect(() => {
    console.log("Use Effect Called");
  }, [data]);

  return (
    <div className="App">
      <h2>Hooks in React</h2>
      <div>
        <h4>Use Effect with useState()</h4>
        <h5>Data Counter: {data}</h5>
        <button onClick={() => setData(data + 1)}>Update Data</button>

        <h5>Numbers Counter: {numbers}</h5>
        <button onClick={() => setNumbers(numbers + 1)}>Update Numbers</button>
      </div>
      <div>
        <h4>Use Effect with Props</h4>
        <User numbers={numbers} data={data} />

        <button onClick={() => setData(data + 1)}>Update Data</button>
        <button onClick={() => setNumbers(numbers + 1)}>Update Numbers</button>
      </div>
    </div>
  );
}

export default Hooks;
