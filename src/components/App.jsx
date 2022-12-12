import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  getInputValue = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  renderMarcup = event => {
    event.preventDefault();

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            name: this.state.name,
            id: nanoid(),
            number: this.state.number,
          },
        ],
      };
    });
    this.setState({ name: '' });
    this.setState({ number: '' });
  };
  getInputValueFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const filterContacts = this.state.contacts.filter(value =>
      value.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <form action="" onSubmit={this.renderMarcup}>
        <label>
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
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.getInputValue}
          />
        </label>
        <button type="submit">Add Contact</button>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.getInputValueFilter}
          />
        </label>
        <ul>
          {filterContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}
