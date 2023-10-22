import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
  Titleh3,
} from './styles';

const App = () => {
  const [list, setList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const inputChange = (event) => {
    setInputValue(event.target.value); // Atualizado o estado inputValue com o valor do campo de entrada
  };

  const handleClick = () => {
    if (inputValue) {
      setList([...list, { id: uuidv4(), task: inputValue, finished: false }]);
      setInputValue(''); // Limpar o campo de entrada após adicionar a tarefa
    }
  };

  const finalizarTask = (id) => {
    const newList = list.map((item) => {
      return item.id === id ? { ...item, finished: !item.finished } : item;
    });
    setList(newList);
  };

  const deleteTask = (lis) => {
    const listActual = lis;
    const del = list.filter((lista) => {
      return lista === listActual ? null : lista;
    });
    setList(del);
  };

  return (
    <Container>
      <ToDoList>
        <Input
          id="input-value"
          onChange={inputChange}
          value={inputValue}
          type="text"
          placeholder="O que tenha pra fazer..."
        />
        <Button onClick={handleClick} disabled={!inputValue}>
          Adicionar
        </Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem key={item.id} data-is-finished={item.finished}>
                <Check onClick={() => finalizarTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteTask(item)} />
              </ListItem>
            ))
          ) : (
            <Titleh3>Não há itens na lista</Titleh3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
};

export default App;
