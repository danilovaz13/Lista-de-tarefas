import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [list, setlist] = React.useState([]);
  const [showInput, setShowInput] = React.useState(null);

  function inputchange(event) {
    setShowInput({ id: uuidv4(), task: event.target.value });
  }

  function handleClick() {
    setlist([...list, showInput]);
    console.log(list);
  }
  return (
    <div>
      <input
        id="input-value"
        onChange={inputchange}
        type="text"
        placeholder="O que tenha pra fazer..."
      />
      <button onClick={handleClick}>Adicionar</button>

      <ul>
        {list.map((list) => (
          <li key={list.id}>{list.task}</li>
        ))}
      </ul>
      {/* <p>{showInput.task}</p> */}
    </div>
  );
};
export default App;
