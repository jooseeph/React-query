import { useQuery, useQueryClient, useMutation } from 'react-query';
import {
  deleteAllPostsService,
  deletePostService,
  getPostsService,
} from './table.service';
import TableModel from '../models/table.model';

export const usePosts = () => {
  return useQuery<TableModel[], Error>('test', async () => {
    const posts = await getPostsService();
    return posts.map((item: any) => new TableModel(item));
  });
};

export const DeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return deletePostService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('test');
    },
  });
};

export const DeleteAllPosts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return deleteAllPostsService();
    },
    onSuccess: () => {
      queryClient.invalidateQueries('test');
    },
  });
};
