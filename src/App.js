import React, { Component } from 'react'
import { database } from './firebase'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      newData: ''
    }
  }

  componentDidMount () {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
  }

  handleChange = (event) => {
    const newData = event.target.value
    this.setState({
      newData
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    database.ref()
            .child('AMAZINGNEWDATA')
            .set(this.state.newData)
  }
  render () {
    const { newData, data } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div className='App'>
        <div className='App--header'>
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className='App--data'>
          { JSON.stringify(data, null, 2) }
        </pre>
        <form className='App--form' onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={newData} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default App
