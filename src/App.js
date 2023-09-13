import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/terms"} element={<Terms />} />
        <Route path={"/privacy"} element={<Privacy />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
