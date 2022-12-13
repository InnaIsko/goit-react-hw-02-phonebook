import { Contact, BtnDelite, ContactItem } from './ContactList.styled';

export function ContactList({ onFilterContacts, onContactsDelite }) {
  return (
    <ul>
      {onFilterContacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <BtnDelite onClick={() => onContactsDelite(contact.id)}>
            {' '}
            Delete
          </BtnDelite>
        </ContactItem>
      ))}
    </ul>
  );
}
