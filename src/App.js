// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <People />
      <AlertCall />
      <VariableIssue />
    </div>
  );
}

// You can create multiple function components in a single file and use them.
// Component inside a Component

function People() {
  function Greet() {
    return <span>Welcome</span>;
  }
  return (
    <div>
      <h5>
        <Greet /> Sumayyah Sayyed
      </h5>
      <h5>
        <Greet /> Ayesha Umar
      </h5>
      <h5>
        <Greet /> Ayesha Asif
      </h5>
    </div>
  );
}

function AlertCall() {
  function errorMessage() {
    return alert("Your computer will turn of in 1 minute.");
  }
  // return <button onClick={errorMessage()}>CLick Me</button>; // If you will call the function, the alert function will run globally. the function is called as soon as the app starts.

  // return <button onClick={alert("YOU clicked me")}>CLick Me</button>; // This will also run globally.

  return <button onClick={errorMessage}>CLick Me</button>; // This is the correct method.

  // return <button onClick={()=> {alert("CLicked through an arrow function")}}>CLick Me</button>; // this also will run correctly

  // return <button onClick={() => errorMessage()}>CLick Me</button>; // This is also correct
}

function VariableIssue() {
  let userName = "Sumayyah Sayyed";

  function alertFunction() {
    userName = "Sam Sayyed";
    alert(userName);
  }
  return (
    <div className="App">
      {/* This will not not print the updated value. To fix this issue, use state and props */}

      <h3>{userName}</h3>
      <button onClick={alertFunction}>New Button</button>
    </div>
  );
}

export default App;
