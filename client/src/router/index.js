import App from '../features/app';
import Auth from '../features/auth';
import JobPostingDetails from '../features/jobPostingDetails';
import Profile from '../features/profile';
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
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/jobDetails/:postId",
    element: <JobPostingDetails />,
  },
])

export default router;