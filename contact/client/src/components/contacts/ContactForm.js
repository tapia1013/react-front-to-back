import React, { useState, useContext, useEffect } from 'react'
// context
import ContactContext from '../../context/contact/contactContext';



const ContactForm = () => {
  const contactContext = useContext(ContactContext);



  // destructure from our Context
  const { addContact, updateContact, current, clearCurrent } = contactContext;


  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else {
      // clear
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      })
    }
  }, [contactContext, current]) // only happen if these values are changed


  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });


  const { name, email, phone, type } = contact;



  const onChange = e => setContact({
    ...contact,
    [e.target.name]: e.target.value
  })



  const onSubmit = e => {
    e.preventDefault();


    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    // set inputs to default/empty when submited
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    })
  }





  // clear all
  const clearAll = () => {
    clearCurrent();
  }



  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        onChange={onChange}
        value={name}
        name="name"
        placeholder="name"
        type="text"
      />
      <input
        onChange={onChange}
        value={email}
        name="email"
        placeholder="Email"
        type="email"
      />
      <input
        onChange={onChange}
        value={phone}
        name="phone"
        placeholder="Phone"
        type="text"
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      /> Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      /> professional
      <div>
        <input
          type="submit"
          value={current ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button
            className="btn btn-light btn-block"
            onClick={clearAll}
          >
            Clear
           </button>
        </div>
      )}
    </form>
  )
}


export default ContactForm;