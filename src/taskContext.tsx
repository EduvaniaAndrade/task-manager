import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from './services/api'

interface Task {
  id: number
  title: string
  date: string
}

interface TasksProviderProps {
  children: ReactNode
}

type TaskInput = Omit<Task, 'id'>

interface TaskData {
  tasks: Task[]
  createTask: (task: TaskInput) => void
}

export const TasksContext = createContext<TaskData>({} as TaskData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    api.get('tasks').then((response) => setTasks(response.data.tasks))
  }, [])

  function createTask(task: TaskInput) {
    api.post('/tasks', task)
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  )
}
