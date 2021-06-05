import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;


  // creating private route component 
  return (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (
      <Redirect to='/login' />
    ) : (
      <Component {...props} />
    )} />
  )
}










export default PrivateRoute;






// CONTACTS API VIDEO 1 watch from the start

