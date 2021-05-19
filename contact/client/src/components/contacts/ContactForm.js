import React, { useState, useContext } from 'react'
// context
import ContactContext from '../../context/contact/contactContext';



const ContactForm = () => {
  const contactContext = useContext(ContactContext)

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

    contactContext.addContact(contact);

    // set inputs to default/empty when submited
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    })
  }



  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
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
      /> Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
      /> professional
      <div>
        <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
      </div>
    </form>
  )
}


// video 5. contactFOrm component @ 15:05s
export default ContactForm;