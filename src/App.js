import React from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button} from "./styles"

import People from "./assets/Image1.svg"
import Arrow from "./assets/seta.svg"


const App = () => {
  return <Container>
<Image alt="logo-imagem" src={People}/>
<ContainerItens>
  <H1>Olá!</H1>
  <InputLabel>Nome</InputLabel>
  <Input placeholder='Nome' />
  <InputLabel>Idade</InputLabel>
  <Input placeholder='Idade' />
  <Button>Cadastrar <img alt='seta' src={Arrow}/></Button>
</ContainerItens>

  </Container>
}
export default App