import { Link } from 'react-router-dom'
import Add from '../../images/add.svg'
import Bar from '../../images/bar.svg'
import UserImage from '../../images/userImage.jpg'
import { Container, Content, Icon } from './style'

export function Header() {
  let containerMenu = document.querySelector('.containerMenu')

  function handleOpenMenu() {
    containerMenu?.classList.add('showen')
  }

  return (
    <Container className="containerHeader">
      <Content>
        <img src={Bar} alt="Bar" onClick={handleOpenMenu} />
        {window.location.pathname !== '/addtask' ? (
          <div className="contentAddTask">
            <img src={Add} alt="Add" />
            <Link to="/addTask">
              <span className="newTask">Add Task</span>
            </Link>
          </div>
        ) : (
          ' '
        )}
      </Content>
      <Content>
        <img src={UserImage} alt="User" className="UserImage" />
        <div className="UserInfo">
          <span>Eduvânia Andrade</span>
          <Link to="/profile">
            <span>My Account</span>
          </Link>
          <Icon />
        </div>
      </Content>
    </Container>
  )
}
