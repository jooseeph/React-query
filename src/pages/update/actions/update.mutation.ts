import { useMutation, useQueryClient } from 'react-query';
import { updatePost } from './update.service';
import { IFormValues } from '../../form/form';

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (params: { postId: number; updatedData: IFormValues }) =>
      updatePost(params.postId, params.updatedData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('test');
      },
    }
  );
};
