import React from "react";

function Student(data) {
  console.log("Student Name: ", data);
  return (
    <div
      className="App"
      style={{
        backgroundColor: "skyblue",
        border: "1px solid black",
        margin: "1em",
      }}
    >
      <h4>Welcome Student of the Year: {data.name}</h4>
      <h5>Student Email: {data.email}</h5>
      {/* <h5>Student Phone Number: {data.others.phone} </h5>
      <h5>Student Address: {data.others.address} </h5> */}
    </div>
  );
}

// class Student extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h4>Student Component</h4>
//       </div>
//     );
//   }
// }

export default Student;
