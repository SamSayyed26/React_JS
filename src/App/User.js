import { useState } from "react";

function User(props) {
  let userData;
  const [userInfo, setUserInfo] = useState("");

  function returnValues(userInfo) {
    if (
      !userInfo.Name ||
      !userInfo.Age ||
      !userInfo.Company ||
      !userInfo.Designation
    ) {
      return (
        <div>
          <br />
          <span>No user Found</span>
        </div>
      );
    } else {
      return (
        <div>
          <h4>User</h4>
          <span> {userInfo.Name} </span> <br />
          <span> {userInfo.Age} </span> <br />
          <span> {userInfo.Company} </span> <br />
          <span> {userInfo.Designation} </span> <br />
        </div>
      );
    }
  }
  return (
    <div>
      <h3>User Component</h3>
      <button
        onClick={() => {
          userData = props.data();
          console.log(userData);
          setUserInfo(userData);
        }}
      >
        Call User
      </button>
      {returnValues(userInfo)}
    </div>
  );
}
export default User;
