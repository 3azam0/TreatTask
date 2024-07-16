import axios from 'axios';
import {I18nManager} from 'react-native';
import store from '../toolkit';
import {setupCache} from 'axios-cache-adapter';
import {userLogout} from '../toolkit/user';
import {navigate} from '../navigation';

const BASE_URL = 'https://example.com/api';

const USER_TOKEN = 'USER_TOKEN';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const API = axios.create({
  baseURL: BASE_URL,
  //adapter: cache.adapter,
});

API.interceptors.request.use(async request => {
  if (request.headers['Content-Type'] !== 'multipart/form-data') {
    request.headers['Content-Type'] = 'application/json';
  }
  request.headers['Accept'] = 'application/json';
  request.headers['X-localization'] = I18nManager.isRTL ? 'ar' : 'en';
  const token = store?.getState()?.user?.token;
  if (token !== null) {
    request.headers['Authorization'] = 'Bearer ' + token;
  }

  return request;
});

API.interceptors.response.use(undefined, function (error) {
  if (error.response?.status == 401) {
    navigate('AuthStack');
    store.dispatch(userLogout());
  }
  return Promise.reject(error);
});

export {BASE_URL, API, USER_TOKEN};
