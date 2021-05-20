import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';



const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  // initialize ref value
  const text = useRef('')

  // destructure from context
  const { filterContacts, clearFilter, filtered } = contactContext;


  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  })


  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter();
    }
  }



  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contracts..."
        onChange={onChange}
      />
    </form>
  )
}



export default ContactFilter;