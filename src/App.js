import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
    this.createRandom = this.createRandom.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByPopularity = this.sortByPopularity.bind(this)
    this.deleteElem = this.deleteElem.bind(this)
  }
  componentDidMount() {
    let firstFive = contacts.slice(0, 5);
    this.setState({
      contacts: firstFive
    })
  }
  createRandom() {
    let newStateContacts = this.state.contacts.slice();
    newStateContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({
      contacts: newStateContacts
    })
  }
  sortByName() {
    let newStateContacts = this.state.contacts.slice();
    newStateContacts.sort((a, b) => {
      if (a.name > b.name) return 1;
      else return -1;
    })
    this.setState({
      contacts: newStateContacts
    })
  }
  sortByPopularity() {
    let newStateContacts = this.state.contacts.slice();
    newStateContacts.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      else return 1;
    })
    this.setState({
      contacts: newStateContacts
    })
  }
  deleteElem(i) {
    console.log("clicked")
    let newStateContacts = this.state.contacts.slice();
    newStateContacts.splice(i, 1);
    this.setState({
      contacts: newStateContacts
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.createRandom}>Create a random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="table-container">
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.contacts.map((contact, i) => {
              return (
                <tr key={i}>
                  <td><img className="picture" src={contact.pictureUrl} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <button onClick={e => this.deleteElem(i)}>Delete</button>
                </tr>
              )
            })
            }
          </table>
        </div>
      </div>
    );
  }
}
export default App;