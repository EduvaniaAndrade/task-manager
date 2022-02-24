import { FaArrowLeft } from 'react-icons/fa'
import { Button, Container, Content } from './style'
import UserImage from '../../images/userImage.jpg'
import user from '../../images/user.svg'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <Content>
        <label>
          <FaArrowLeft />
        </label>
        <h1>My profile</h1>
        <span className="profile">Preview my informations</span>
      </Content>

      <Content>
        <img src={UserImage} alt="user" className="UserImage" />
        <h3>Eduvânia Andrade</h3>
        <span>My account</span>
      </Content>

      <Content className="content">
        <Content>
          <Content className="ContentInfo">
            <span>Display name</span>
            <h4>Eduvânia Andrade</h4>
          </Content>
          <Content className="ContentInfo">
            <span>Email</span>
            <h4>eduvaniaa@gmail.com</h4>
          </Content>
        </Content>

        <Content>
          <img src={user} alt="user icon" />
        </Content>
      </Content>

      <Link to="/dashboard">
        <Button>Sign Out</Button>
      </Link>
    </Container>
  )
}
