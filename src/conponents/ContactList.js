import React from 'react';

const ContactList = ({ filter, contacts, onDelete }) => {
  const normalizeSearchItem = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeSearchItem),
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDelete(id)} style={{ marginLeft: '20px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
