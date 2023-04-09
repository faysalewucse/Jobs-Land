import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./components/ErrorPage";
import Main from "./components/Main";
import Statistics from "./pages/Statistics";
import AppliedJobs from "./pages/AppliedJobs";
import Blog from "./pages/Blog";

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
