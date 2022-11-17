import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  getInputValue = event => {
    this.setState({ name: event.currentTarget.value });
  };
  renderMarcup = event => {
    event.preventDefault();

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, this.state.name] };
    });
    this.setState({ name: '' });
  };

  render() {
    return (
      <form action="" onSubmit={this.renderMarcup}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.getInputValue}
          />
        </label>
        <button type="submit">Add Contact</button>
        <ul>
          {this.state.contacts.map(contact => (
            <li>{this.state.contacts}</li>
          ))}
        </ul>
      </form>
    );
  }
}
