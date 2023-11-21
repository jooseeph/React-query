import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';
import { IFormValues } from '../form';

export const addPost = (post: IFormValues) => {
  return axiosInstance.post(API.posts, post).then(res => res.data);
};