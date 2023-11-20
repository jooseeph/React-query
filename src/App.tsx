import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ReactQueryDevtools } from 'react-query/devtools';

const query = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={query}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
