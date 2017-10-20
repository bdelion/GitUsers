import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      nb : 0
    }
  }

  componentDidMount() {
    fetch("http://gitlab-fabfonc.maif.local/api/v4/users?per_page=1000",
            {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "PRIVATE-TOKEN": "zno11aMfyen6ytthFtYX"
                }
            })
      .then(response => response.json())
      .then(json => {
        let userList = json.map((item) => {
           return <li key={item.id}>{item.email}</li>
        });
       this.setState( {users : userList, nb : json.length});
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Gitlab API</h1>
          <h2>Users : {this.state.nb}</h2>
        </header>
        <ul>
        {this.state.users}
        </ul>
      </div>
    );
  }
}

export default App;
