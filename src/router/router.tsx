import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import NotfoundComponent from "../pages/not-found/notfound.component";
import FormComponent from "../pages/form/form.component";
import TableComponent from "../pages/table/table.component";
import UpdateFormComponent from "../pages/detail/update.component";

const router = createBrowserRouter([
  {
    path: Routes.form,
    element: <FormComponent/>
  },
  {
    path: Routes.default,
    element: <FormComponent/>
  },
  

  {
    path: Routes.details,
    element: <TableComponent/>
  },

  {
    path: Routes.table,
    element: <TableComponent/>
  },
  {
    path: Routes.update,
    element: <UpdateFormComponent />,
  },
  {
    path: '*',
    element: <NotfoundComponent />,
  },
]);

export default router;
