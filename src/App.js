import React from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User} from "./styles"
import { useState } from 'react'


import People from "./assets/Image1.svg"
import Arrow from "./assets/seta.svg"
import Trash from "./assets/lixeira.svg"

function App() {
const [users, setUsers] = useState([]);
const [name, setName] = useState();
const [age, setAge] = useState();
 // {id: Math.random(), name: "Rodolfo", age: 28},
 // {id: Math.random(), name: "Flávia", age: 34},
 
function changeInputName(event){
setName(event.target.value)
};

function changeInputAge(event){
setAge(event.target.value)
};

function addNewUser(){
setUsers([ ...users,{id: Math.random(), name, age}])
};


  return ( 
    <Container>
<Image alt="logo-imagem" src={People}/>
<ContainerItens>
  <H1>Olá!</H1>
  <InputLabel>Nome</InputLabel>
  <Input onChange={changeInputName} placeholder='Nome' />
  <InputLabel>Idade</InputLabel>
  <Input onChange={changeInputAge} placeholder='Idade' />
  <Button onClick={addNewUser}>
    Cadastrar <img alt='seta' src={Arrow}/>
    </Button>

  <ul>
    {users.map((user) => (
      <User key={user.id}>
        <p>{user.name}</p> <p>{user.age}</p>
        <button><img src={Trash} alt='lata-de-lixo'/></button>
    </User>))}
  </ul>
</ContainerItens>

  </Container>
  );
}
export default App