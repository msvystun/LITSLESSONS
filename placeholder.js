import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return(
      <div className="App">
        <table>
          <tbody>
          {this.state.users.map(n => (
            <tr key={n.id }>
              <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.username}</td>
              <td>{n.email}</td>
              <td>{n.phone}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;