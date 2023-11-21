import { useQueryClient, useMutation } from 'react-query';
import { addPost } from './form.service';
import { IFormValues } from '../form';

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: IFormValues) => {
      return addPost(post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};
