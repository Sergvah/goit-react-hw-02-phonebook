import css from 'components/ContactItem/contactitem.module.css';

const ContactItem = ({ name, number }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>{name}:</p>
      <p>{number}</p>
    </li>
  );
};
export default ContactItem;
