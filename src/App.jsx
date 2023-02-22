import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/experience", element: <Experience /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
