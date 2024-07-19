// import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DiscoverUsInfo from "./pages/DiscoverUsInfo";
import About from "./pages/About";
import Features from "./pages/Features";
import PurchasePage from "./pages/PurchasePage";
// import ParticlesBackground from "./components/ParticlesBackground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {path: "/discoverUsInfo", element: <DiscoverUsInfo />},
      {path: "/aboutUs", element: <About />},
      { path: "/features", element: <Features />},
      { path: "/purchasePage", element: <PurchasePage />},
      // { path: "/blog-detail", element: <BlogDetailPage /> },
      // { path: "/bible-reader", element: <BibleReader /> },
    ],
  },
]);

function App() {
  return (
    <>
    {/* <ParticlesBackground /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
