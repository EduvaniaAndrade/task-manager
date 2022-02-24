import {
  Container,
  Content,
  ContentImage,
  Description,
  Header,
  List,
  Title,
} from './style'
import DashboardImage from '../../images/dashboardImage.svg'
import Bar from '../../images/bar.svg'
import { Link } from 'react-router-dom'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Title>
          <span>Task</span>Manager
        </Title>

        <List>
          <li>About us</li>
          <li>Cases</li>
          <li>Resources</li>
        </List>

        <Link to="/SignIn">
          <button type="button">Sign In</button>
        </Link>
        <img src={Bar} alt="Bar" />
      </Header>

      <Content>
        <Description>
          <h1>
            <span> Creative Digital</span> Design Agency
            <br /> is looking for new talent
          </h1>
          <span>Creative Digital Design Agency is looking for new talent</span>
          <br />
          <Link to="/taskList">
            <button type="button">Get started</button>
          </Link>
        </Description>
        <ContentImage>
          <img src={DashboardImage} alt="This is the Dashboard pic place" />
        </ContentImage>
      </Content>
    </Container>
  )
}
