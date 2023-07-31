import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Transactions, { transactionLoader } from '../pages/Transactions';
import Categories, {
  CategoryLoader,
  categoriesAction,
} from '../pages/Categories';
import Auth from '../pages/Auth';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'transactions',
        loader: transactionLoader,
        element: (
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        ),
      },
      {
        path: 'categories',
        action: categoriesAction,
        loader: CategoryLoader,
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
