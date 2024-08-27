import { MyProvider } from "./MyContext";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Students from "./pages/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/students/:college",
    element: <Students />,
  }
]);

function App() {
  return (
    <MyProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </MyProvider>
  );
}

export default App;
