import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactsOfList/contactsoflist.module.css';

const ContactsOfList = ({ contacts }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} id={id} name={name} number={number} />
    ))}
  </ul>
);
export default ContactsOfList;
