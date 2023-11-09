
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./styles"
import { useState, useRef } from 'react'
import axios from 'axios'



import People from "../assets/Image1.svg"
import Arrow from "../assets/seta.svg"


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
  




  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />
        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>      
      </ContainerItens>

    </Container>
  );
}
export default App