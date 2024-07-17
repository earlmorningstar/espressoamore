// import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "/bible", element: <Bible /> },
      // { path: "/blog", element: <Blog /> },
      // { path: "/blog-detail", element: <BlogDetailPage /> },
      // { path: "/bible-reader", element: <BibleReader /> },
    ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
