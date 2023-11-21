import { useEffect } from "react";

function User(props) {
  useEffect(() => {
    console.log("User Effect For Props");
  }, [props.data]);
  return (
    <div>
      <h5>Numbers Props: {props.numbers} </h5>
      <h5>Data Props: {props.data} </h5>
    </div>
  );
}
export default User;
