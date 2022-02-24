import { Container, List } from './style'
import close from '../../images/close.svg'

export function Menu() {
  const containerMenu = document.querySelector('.containerMenu')
  function handleHideMenu() {
    containerMenu?.classList.remove('showen')
  }

  return (
    <Container className="hidden containerMenu">
      <img src={close} alt="close" onClick={handleHideMenu} />
      <List>
        <li>About us</li>
        <li>Cases</li>
        <li>Resources</li>
      </List>
    </Container>
  )
}
