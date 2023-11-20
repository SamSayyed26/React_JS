import React, { useState } from "react";
import Student from "./Student";

function StudentData() {
  //   const [value, setValue] = useState("Sumayyah Sayyed");
  const [value, setValue] = useState({
    name: "Sumayyah Sayyed",
    email: "sam123@gmail.com",
  });

  function capitalize() {
    const capitalizedValue = {};
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        capitalizedValue[key] = value[key].toUpperCase();
      }
    }
    setValue(capitalizedValue);
  }

  console.log("Values: ", value);
  return (
    <div className="App" style={{ marginBottom: "1em" }}>
      <Student name={value.name} email={value.email}></Student>

      <button onClick={capitalize}>Uppercase Me</button>
    </div>
  );
}

export default StudentData;
