import axiosInstance from '../../../core/configs/axios.config';
import { API } from '../../../core/configs/api.config';

export const updatePost = (postId: number, updatedData: any) => {
  const url = `${API.posts}/${postId}`;
  return axiosInstance.put(url, updatedData).then(res => res.data);
};
