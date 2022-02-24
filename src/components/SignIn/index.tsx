import {
  Container,
  ContainerInputs,
  Content,
  ContentInput,
  Facebook,
  Google,
  IconContent,
  IconInput,
  Title,
} from './style'

export function SignIn() {
  return (
    <Container>
      <Title>
        <span>Task</span>Manager
      </Title>

      <Content>
        <IconContent>
          <Google />
        </IconContent>
        <IconInput value="Google" type="button" />
      </Content>

      <Content>
        <IconContent>
          <Facebook />
        </IconContent>
        <IconInput value="Facebook" type="button" />
      </Content>

      <ContainerInputs>
        <ContentInput>
          <span>Your Email</span>
          <input type="email" placeholder="Pleace insert your e-mail adress" />
        </ContentInput>

        <ContentInput>
          <span>Your Password</span>
          <input
            type="password"
            placeholder="Pleace insert your password adress"
          />
        </ContentInput>
      </ContainerInputs>

      <button type="button">Sign In</button>
    </Container>
  )
}
