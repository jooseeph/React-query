import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const query = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={query}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
