import { useEffect, forwardRef } from "react";

function User(props, ref) {
  useEffect(() => {
    console.log("User Effect For Props");
  }, [props.data]);
  return (
    <div>
      <h5>Numbers Props: {props.numbers} </h5>
      <h5>Data Props: {props.data} </h5>

      <div>
        <h5>Child Component</h5>
        <input type="text" ref={ref} />
      </div>
    </div>
  );
}
export default forwardRef(User);
