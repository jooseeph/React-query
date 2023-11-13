import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import DetailComponent from "../pages/detail/detail.component";
import NotfoundComponent from "../pages/not-found/notfound.component";
import FormComponent from "../pages/form/form.component";
import TableComponent from "../pages/table/table.component";

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
    path: Routes.table,
    element: <TableComponent/>
  },
  {
    path: Routes.detail,
    element: <DetailComponent />,
  },
  {
    path: '*',
    element: <NotfoundComponent />,
  },
]);

export default router;
