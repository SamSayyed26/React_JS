import User from "./User";

function Main() {
    let data = {
      Name: "Sumayyah Sayyed",
      Age: "22",
      Company: "Focusteck",
      Designation: "Associate Software Engineer",
    };
  function getData() {
    // alert("HEllo user COmponent from MAin");
    return data;
  }
  return (
    <div className="App">
      <User data={getData} />
    </div>
  );
}

export default Main;
