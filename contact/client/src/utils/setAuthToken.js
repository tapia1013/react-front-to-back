import axios from 'axios';


const setAuthToken = token => {
  if (token) {
    // 'x-auth-token' is the key and we set it to the actual token
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    //if not then we delete
    delete axios.defaults.headers.common['x-auth-token'];
  }
}


export default setAuthToken;