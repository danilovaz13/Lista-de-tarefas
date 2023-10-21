import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, ToDoList, Input, Button } from './styles';

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
    <Container>
      <ToDoList>
        <Input
          id="input-value"
          onChange={inputchange}
          type="text"
          placeholder="O que tenha pra fazer..."
        />
        <Button onClick={handleClick}>Adicionar</Button>

        <ul>
          {list.map((list) => (
            <li key={list.id}>{list.task}</li>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
};
export default App;
