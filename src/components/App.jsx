import React from 'react';
import Contacts from './Contacts/Contacts';
import FilterSearch from './FilterSearch/FilterSearch';
import ContactsOfList from './ContactsOfList/ContactsOfList';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  addContact = ({ name, number }) => {
    console.log(name);
    console.log(number);

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Contacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <FilterSearch value={this.state.filter} onChange={this.changeFilter} />
        <ContactsOfList contacts={this.getVisibleContacts()} />
      </div>
    );
  }
}

export default App;
