import qs from 'qs';
import { getFromStorage, setInStorage } from '../../helpers/localStorage';

const authContext = () => {
  const queryParams = window.location.search.replace('?', '');
  let token = getFromStorage('token');
  const params = qs.parse(queryParams);

  // Overwrite existing token whenever a new one is received.
  if (params.token) {
    token = params.token;
    setInStorage('token', token);
    window.location.replace(process.env.REACT_APP_CLIENT_URL);
  }

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
};

export default authContext;
