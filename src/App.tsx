import ItemCard from "./components/ItemCard";
import "./Global.css";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const PathConstants = {
    HOME: "/",
  };

  const routes = createBrowserRouter([
    {
      path: PathConstants.HOME,
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
