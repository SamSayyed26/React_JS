import { Component } from "react";

class Render extends Component {
  constructor() {
    super();
    this.value = {
      email: "Zeeshan123@gmail.com",
    };
  }
  componentWillUnmount() {
    // this will call just before removing the component.
    console.log("Calling componentWillUnmount");
  }
  render() {
    // console.log("Props: ", this.props);
    console.log("Email: ", this.value.email);

    return (
      <div className="App" style={{ border: "1px solid black" }}>
        <h3>Render Component</h3>
        <button onClick={() => this.setState({ email: "bilal123@gmail.com" })}>
          Update Email
        </button>
        {this.value.email}
      </div>
    );
  }
}

export default Render;
