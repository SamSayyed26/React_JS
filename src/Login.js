import { useState } from "react";

function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);

  function loginHandle(e) {
    e.preventDefault();
    if (!userID || !password) {
      alert("Enter Correct values");
    } else {
      alert("All Good");
    }
  }
  function userHandler(e) {
    let ID = e.target.value;
    if (ID.length < 3) {
      console.log("Invalid ID");
      setError(true);
    } else {
      setError(false);
      setUserID(ID);
    }
  }
  function passwordHandler(e) {
    let Password = e.target.value;
    if (Password.length < 3) {
      console.log("Invalid Password");
      setPassError(true);
    } else {
      setPassError(false);
      setPassword(Password);
    }
  }
  // const
  return (
    <div className="App" style={{ margin: "3em" }}>
      <h3>Login</h3>
      <form onSubmit={loginHandle}>
        <div>
          <label>User ID</label>
          <br />
          <input type="text" placeholder="ID" onChange={userHandler} />
          {error ? <span>ID is not valid</span> : null}
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="text"
            placeholder="password"
            onChange={passwordHandler}
          />
          {passError ? <span>Password is not valid</span> : null}
        </div>
        <br />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
}

export default Login;
