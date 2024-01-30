import React, {useState} from "react";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githublogo from "../../assets/images/github-logo.svg";
import { MdSearch } from 'react-icons/md';

const MainPage = () => {

  const [login, setLogin] = useState("")

  return(
    <Container>
      <Logo src={githublogo} alt="API Github"/>
      <Title>API Github</Title>
      <Form>
        <Input
        placeholder="usuário"
        value={login}
        onChange={(event) => {setLogin(event.target.value)}}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )
}

export default MainPage;
