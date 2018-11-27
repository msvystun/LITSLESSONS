import React, { Component } from 'react';
import './App.css';

function req1() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
      var name = json.name
      var body = json.username;
      var email = json.email;
      var website = json.website;
      document.getElementById("printUser").innerHTML = 
      '<td class="firstCol">1.</td>' + '<td>' + name + '</td>' 
      + '<td>' + body + '</td>' 
      + '<td>' + email + '</td>' 
      + '<td>' + website + '</td>';
      
    });
}
req1();

class App extends Component {
  render() {
    return(
      <div className="App">
      <table>
        <tbody>
          <th>json users</th>
          <tr id="printUser">
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default App;