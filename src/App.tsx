import { TasksProvider } from './taskContext'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard/index'
import { Profile } from './components/Profile/index'
import { SignIn } from './components/SignIn/index'
import { TaskList } from './components/TaskList/index'
import { AddTask } from './components/AddTask/index'
import { Menu } from './components/Menu'

function App() {
  return (
    <TasksProvider>
      <GlobalStyle />
      <BrowserRouter>
        {!['/', '/SignIn'].includes(window.location.pathname) ? (
          <Header />
        ) : null}
        {window.innerWidth <= 768 ? <Menu /> : ''}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signIn/" component={SignIn} />
        <Route exact path="/addTask/" component={AddTask} />
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/taskList/" component={TaskList} />
      </BrowserRouter>
    </TasksProvider>
  )
}

export default App
