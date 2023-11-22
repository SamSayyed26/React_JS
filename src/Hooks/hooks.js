/* Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions. */

import { useEffect, useState, useMemo, useRef } from "react";
import User from "./User";
function Hooks() {
  const [numbers, setNumbers] = useState(10);
  const [data, setData] = useState(30);
  // we can have multiple useEffect functions. The parameter at the end defines on which the useEffect should run, If not provided any value, it will run for all values.

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("useMemo() Hook Called");
      return data * 2;
    },
    [data]
  );

  useEffect(() => {
    console.log("Use Effect Called");
  }, [data]);

  //useRef()
  let inputRef = useRef(null);
  function handleInput() {
    console.log("UseRef() Called");
    inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }

  //forwardRef()
  let inputForwardRef = useRef(null);
  function updateInputForwardRef() {
    inputForwardRef.current.value = "1000";
  }

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

        <h6>Multiple Value: {multiCountMemo}</h6>
      </div>

      <div>
        <h4>UseRef() Hook</h4>
        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>Handle Input</button>
      </div>

      <div>
        <h4>Forward Ref Hook</h4>
        <User ref={inputForwardRef} />
        <button onClick={updateInputForwardRef}>Update Input</button>
      </div>
    </div>
  );
}

export default Hooks;
