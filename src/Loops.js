function Loops() {
  const listOfNames = ["sam", "peter", "john"];

  listOfNames.map((item) => console.log("Item: ", item));

  for (let i = 0; i < listOfNames.length; i++) {
    console.log("Items in for loop: ", listOfNames[i]);
  }
  return (
    <div className="App">
      <h1>Hello Loops</h1>
    </div>
  );
}

export default Loops;
