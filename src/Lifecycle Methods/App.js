import { Component } from "react";
import Render from "./Render";
// import { useState } from "react";

class App extends Component {
  constructor() {
    super();
    console.log("Calling Constructor");
    this.state = {
      data: "Amanda",
      count: 1,
      show: true,
    };
  }
  // componentDidMount() {
  //   console.log("Calling ComponentDidMount");
  // }
  shouldComponentUpdate() {
    console.log("Calling shouldComponentUpdate");
    if (this.state.count <= 10) {
      console.count("True");
      return true;
    } else {
      return false;
    }
  }
    componentDidUpdate(previousProp, previousState, snapshot) {
      console.log("Calling componentDidUpdate ", previousState);

      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      }

      /* We can update value in here, though use a conditional statement for it to update, otherwise it will form an infinite loop. It will once update the value using the click setState(), then this function runs , then the setState() in this function and then the loop continues*/
    }
  render() {
    console.log("Calling Render");

    return (
      <div>
        <h1>Hello World Of Life Cycle Components</h1>
        <p>Counter {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update
        </button>

        {/* <button onClick={() => this.setState({ count: 2 })}>Update Name</button> */}

        {this.state.show ? <Render /> : <h3>Render Component Removed</h3>}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Change
        </button>
      </div>
    );
  }
}

// function App() {
//   const [name, setName] = useState("Zeeshan");
//   return (
//     <div className="App">
//       <h5>Render Method in React</h5>
//       <Render name={name} />
//       <button onClick={() => setName("Bilal")}>Update Name</button>
//     </div>
//   );
// }

export default App;
