import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter';
// CONTEXT
import AuthContext from '../../context/auth/authContext';



const Home = () => {
  // initialize authcontext
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser();
  }, []);


  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  )
}
export default Home;