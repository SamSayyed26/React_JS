import React from "react";

// State with Class

class StateClass extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Sumayyah",
    };
  }
  print() {
    // alert("Updated");
    this.setState({
      data: "Sam",
    });
  }
  render() {
    console.log("_____________");
    return (
      <div className="App">
        <h3>{this.state.data}</h3>
        {/* This button might lead to the globally calling the function issue. use the second method */}
        {/* <button onClick={this.print}>Update Data</button> */}
        <button onClick={() => this.print()}>Update Data</button>
      </div>
    );
  }
}

export default StateClass;
