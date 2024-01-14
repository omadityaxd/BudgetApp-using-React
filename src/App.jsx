import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./Pages/Dashboard";
import Error from "./Pages/Error";
import Main, { mainLoader } from "./Layouts/Main";
import { logoutAction } from "./Actions/logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./Pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./Pages/BudgetPage";
import { deleteBudget } from "./Actions/deleteBudget";

// Routes

const router = createBrowserRouter([
  {
    path: "/",
    loader: mainLoader,
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        loader: dashboardLoader,
        action: dashboardAction,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        action: expensesAction,
        path: "expenses",
        loader: expensesLoader,
        element: <ExpensesPage />,
        errorElement: <Error />,
      },
      {
        action: budgetAction,
        path: "budgets/:id",
        loader: budgetLoader,
        element: <BudgetPage />,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
