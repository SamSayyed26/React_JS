import { useState } from "react";

// State with function

function StateFunction() {
  const [userName, setData] = useState("Ayesha Asif");
  // const [data, setData] = useState(0);
  function updateData() {
    setData("Ashley"); // WHy does the console prints only twice. If it is consoling twice, this means that setData is called only twice. It is working fine in the state Class. What is the issue here

    // setData(data + 1);
  }

  console.log("_________");

  return (
    <div className="App">
      <h3>{userName}</h3>
      {/* <h3>{data}</h3> */}
      <button onClick={updateData}>Update Name</button>
    </div>
  );
}

export default StateFunction;
