import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./components/ErrorPage";
import Main from "./components/Main";
import Statistics from "./pages/Statistics";
import AppliedJobs from "./pages/AppliedJobs";
import Blog from "./pages/Blog";
import JobDetails from "./pages/JobDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async () => await fetch("/jobs.json"),
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "applied-jobs",
          element: <AppliedJobs />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "jobdetails/:jobId",
          element: <JobDetails />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
