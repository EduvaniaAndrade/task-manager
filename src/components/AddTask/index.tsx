import { Button, Container, Content, Input } from './style'
import { FaArrowLeft } from 'react-icons/fa'
import { FormEvent, useContext, useState } from 'react'
import { TasksContext } from '../../taskContext'

export function AddTask() {
  const { createTask } = useContext(TasksContext)

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  function handleCreatenewTask(event: FormEvent) {
    event.preventDefault()

    createTask({
      title,
      date,
    })
    console.log('submited')
  }

  return (
    <Container onSubmit={handleCreatenewTask}>
      <Content>
        <label>
          <FaArrowLeft />
        </label>
        <h1>Add task</h1>
        <span className="addTask">Add your tasks to be registered.</span>
      </Content>

      <Content>
        <span>Title task</span>
        <Input
          type="text"
          placeholder="Insert your task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Content>

      <Content>
        <span>Date</span>
        <Input
          type="date"
          placeholder="Today"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </Content>

      <Content>
        <Button type="submit">Create task</Button>
        <Button>Edit task</Button>
      </Content>
    </Container>
  )
}
