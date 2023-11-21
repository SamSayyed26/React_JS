import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import App from "./App";
// import Admin from "./Admin";
// import StateFunction from "./StateFunction";
// import StateClass from "./stateClass";
// // import Student from "./Student";
// import StudentData from "./StudentData";
// import { Input } from "./Input";
// import { ShowHide } from "./ShowHide";
// import FormFunction from "./Form";
// import Profile from "./Profile";
// import Login from "./Login";

// import Main from "./App/Main";

// import App from "./Lifecycle Methods/App";

import Hooks from "./Hooks/hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // <Admin />
  // <StateFunction />
  // <StateClass />
  // <StudentData />
  // <Input />
  // <ShowHide />
  // </React.StrictMode>
  // Strict mode will print or run the function twice when using the useState. Fragment will correct this issue

  <React.Fragment>
    {/* <App />
    <Admin />
    <StateFunction />
    <StateClass />
    <StudentData />
    <Input />
    <ShowHide />
    <FormFunction />
    <Profile /> 
    <Login /> */}

    {/* <Main /> */}

    {/* <App /> */}

    <Hooks />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
