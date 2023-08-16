import App from '../features/app';
import Auth from '../features/auth';
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:action",
    element: <Auth />,
  },
])

export default router;