
const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Alice", "Charlie"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
  
     <h1>Grossery List</h1>
        <p>
          Hello {handleNameChange()}!
        </p>
   
    </div>
  );
}

export default Content;
