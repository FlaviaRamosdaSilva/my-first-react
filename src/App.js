import React, { useEffect } from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from "./styles"
import { useState, useRef } from 'react'
import axios from 'axios'



import People from "./assets/Image1.svg"
import Arrow from "./assets/seta.svg"
import Trash from "./assets/lixeira.svg"

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });
    // o nome da variavel é data pq ele retorna dentro do data as informações, porém com esses dois pontos eu adiciono um novo nome pra essa variante;
  console.log(newUser)

    setUsers([...users, newUser]);
  }
  // aqui colocamos o Axios pegando o endereço do nosso back-end e adicionando um objeto {} com os valores digitados no front-end
  

useEffect ( () => {
  
  async function fetchUsers(){
  const { data: newUser } = await axios.get("http://localhost:3001/users") 
  setUsers(newUser);
}
fetchUsers()
}, [users])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    const newUsers = users.filter(user => user.id !== userId);  // estamos criando um novo array utilizando o array atual e
    // filtrando, onde a gente só deixa no array os usuários que tiverem um ID diferente do que foi selecionado.
    setUsers(newUsers);
  };


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />
        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo' /></button>
            </User>))}
        </ul>
      </ContainerItens>

    </Container>
  );
}
export default App