import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 25px 20px;
  border-radius: 5px;
  width: 500px;

  ul {
    padding: 0;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 35px;
  margin-right: 10px;
  outline: none;
  width: 400px;
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  height: 35px;
  font-weight: 700;
  font-size: 12px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  font-family: 'IBM Plex Mono', monospace;
  width: 80px;
`;

export const ListItem = styled.div`
  background: #e4e4e4;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 10px;
  width: 450px;

  li {
    list-style: none;
  }
`;
