import { createServer, Model } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          title: 'Solve computer logic problems',
          date: new Date('2022-02-02 09:00:00'),
        },
        {
          id: 2,
          title: 'Web site creation',
          date: new Date('2022-02-20 19:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/tasks', () => {
      return this.schema.all('task')
    })

    this.post('/tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('task', data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
