import { useQuery, useQueryClient, useMutation } from 'react-query';
import {
  deleteAllPostsService,
  deletePostService,
  getPostsService,
} from './table.service';

export const usePosts = () => {
  return useQuery<any, Error>('test', () => {
    return getPostsService();
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
