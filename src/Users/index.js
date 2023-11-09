import React, { useEffect } from 'react'
import { Container, Image, ContainerItens, H1, Button, User } from "./styles"
import { useState } from 'react'
import axios from 'axios'



import Avatar from "../assets/Imagem2.svg"
import Arrow from "../assets/seta.svg"
import Trash from "../assets/lixeira.svg"

function Users() {
  const [users, setUsers] = useState([]);
 

  

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
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        
       

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo' /></button>
            </User>))}
        </ul>

        
      <Button to="/">
      <img alt='seta' src={Arrow} /> Voltar 
        </Button>
      </ContainerItens>


    </Container>
  );
}
export default Users