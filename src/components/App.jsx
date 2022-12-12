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
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, id: nanoid() },
        ],
      };
    });
    this.setState({ name: '' });
  };

  render() {
    console.log(this.state);
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
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </form>
    );
  }
}
