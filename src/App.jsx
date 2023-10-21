import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc';

import { Container, ToDoList, Input, Button, ListItem } from './styles';

const App = () => {
  const [list, setlist] = React.useState([]);
  const [showInput, setShowInput] = React.useState(null);

  const inputchange = (event) => {
    setShowInput({ id: uuidv4(), task: event.target.value });
  };

  const handleClick = () => {
    setlist([...list, showInput]);
    console.log(list);
  };
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
            <ListItem>
              <FcCheckmark />
              <li key={list.id}>{list.task}</li>
              <FcEmptyTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
};
export default App;
