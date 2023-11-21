/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import { environment } from './app.config';
import { successToast } from '../shared/toast/toast';
import { getToken } from '../helpers/get-token';

const axiosInstance = axios.create({
  baseURL: environment.apiMain,
  headers: {
    Authorization: 'Bearer ' + getToken(),
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const method = response?.config?.method?.toUpperCase() ?? '';

    if (method === 'POST') {
      successToast('Müraciət göndərildi');
    }

    return response;
  },
  error => {
    let errMessage = '';

    const {
      response: { status },
    } = error;

    switch (status) {
      case 401:
        errMessage = 'Sessiya müddəti bitmişdir';
        localStorage.removeItem(`${environment.applicationName}-token`);
        break;

      case 404:
        errMessage = 'Məlumat tapılmadı';
        break;

      case 500:
        errMessage = 'Server xətası';
        break;

      default:
        errMessage = 'Xəta baş verdi';
    }
  }
);
export default axiosInstance;
