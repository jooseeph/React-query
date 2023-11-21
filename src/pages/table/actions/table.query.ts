import { useQuery } from 'react-query';
import TableModel from '../models/table.model';
import { getPostsService } from './table.service';

export const usePosts = () => {
  return useQuery<TableModel[], Error>('posts', async () => {
    const posts = await getPostsService();
    return posts;
  });
};
