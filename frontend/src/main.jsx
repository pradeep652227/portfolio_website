import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import Layout from "./Layout.jsx"
import { Home, About, Contact, Work, Projects } from "./Components/imports-components.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="experience" element={<Work />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

