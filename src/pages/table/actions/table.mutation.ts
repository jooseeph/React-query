import { useQueryClient, useMutation } from 'react-query';
import { deleteAllPostsService, deletePostService } from './table.service';

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return deletePostService(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};

export const useDeleteAllPosts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return deleteAllPostsService();
    },
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};
