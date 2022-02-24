import { Add, CheckBox, Container, Content, ContentSpan, Span } from './style'
import trash from '../../images/trash.svg'
import plus from '../../images/plus.svg'
import checkImage from '../../images/check.svg'
import { FaSearch } from 'react-icons/fa'
import { useContext } from 'react'
import { TasksContext } from '../../taskContext'
import { useState } from 'react'

export function TaskList() {
  const [isActive, setIsActive] = useState(false)

  function handleChekBox(event: { target: any }) {
    let parent = event.target.parentElement
    if (isActive) {
      parent.classList.add('changeAllChildren')
      setIsActive(!isActive)
    } else {
      parent.classList.remove('changeAllChildren')
      setIsActive(!isActive)
    }
  }

  const { tasks } = useContext(TasksContext)

  return (
    <Container>
      <h1>My Tasks</h1>
      <span className="ContainerSpan">
        Register your tasks and have a better monitoring of your activities
      </span>

      <Content className="search">
        <label>
          <FaSearch />
        </label>
        <input type="search" placeholder="Find of Task" />
      </Content>

      <h2>Task - 2</h2>
      {tasks.map((task) => (
        <Content key={task.id} className={isActive ? '' : ''}>
          <CheckBox className="check" onClick={handleChekBox}>
            <img src={checkImage} alt="check" />
          </CheckBox>
          <ContentSpan>
            <Span className="span">{task.title}</Span>
            <Span>{task.date}</Span>
          </ContentSpan>
          <img src={trash} alt="Trash" />
        </Content>
      ))}

      <Add>
        <img src={plus} alt="plus" />
      </Add>
    </Container>
  )
}
