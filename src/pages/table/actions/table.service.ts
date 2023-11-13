import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import TableModel from "../models/table.model";


export const getPostsService = () => {
  return axiosInstance.get(API.posts).then(res => {
      return res.data.map((item: any) => new TableModel(item));
  });
};


export const deletePostService = (id: number) => {
  return axiosInstance.delete(API.posts + "/" + id);
};
export const deleteAllPostsService = () => {
  return axiosInstance.delete('http://localhost:3000/posts');
};