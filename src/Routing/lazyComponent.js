function LazyComponent() {
  const items = [];
  for (let index = 0; index < 50; index++) {
    items.push(index);
  }
  return <div>{items}</div>;
}

export default LazyComponent;
