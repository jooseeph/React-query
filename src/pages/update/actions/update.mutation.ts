
import { useMutation, useQueryClient } from 'react-query';
import { updatePost } from './update.service';

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation((params: { postId: number; updatedData: any }) => updatePost(params.postId, params.updatedData), {
    onSuccess: () => {
      queryClient.invalidateQueries('test');
    },
  });
};
