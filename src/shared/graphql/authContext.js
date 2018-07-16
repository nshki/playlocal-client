import qs from 'qs';
import { getFromStorage, setInStorage } from '../../helpers/localStorage';

const authContext = (queryParams) => {
  let token = getFromStorage('token');
  const params = qs.parse(queryParams);

  if (!token && params.token) {
    token = params.token;
    setInStorage('token', token);
  }

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
};

export default authContext;
