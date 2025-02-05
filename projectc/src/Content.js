import {useState } from 'react'
const Content = () => {
  const [name, setName] = useState('Dave');
  const [count, setCount] = useState(0)

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

const handleClick = () =>{
  setCount(count + 1)
  setCount(count + 1)
  console.log(count)
}
const handleClick2 = (name) =>{
 console.log(count)
}

  return (
    <div className="App">
  
        <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
   <button onClick={handleNameChange}>Zmien imie</button>
   <button onClick={handleClick}>Kliknij {name}</button>
   <button onClick={handleClick2}>Kliknij sobie 2</button>
    </div>
  );
}

export default Content;
