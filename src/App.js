import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DiscoverUsInfo from "./pages/DiscoverUsInfo";
import About from "./pages/About";
import Features from "./pages/Features";
import PurchasePage from "./pages/PurchasePage";
import PurchaseDetailPage from "./pages/PurchaseDetailPage";
import SignUp from "./pages/SignUp";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import { ScrollProvider } from "./store/ScrollContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "/homePage", element: <HomePage /> },
      { path: "/discoverUsInfo", element: <DiscoverUsInfo /> },
      { path: "/aboutUs", element: <About /> },
      { path: "/features", element: <Features /> },
      { path: "/purchasePage", element: <PurchasePage /> },
      { path: "/purchaseDetailPage/:id", element: <PurchaseDetailPage /> },
      { path: "/SignUpPage", element: <SignUp /> },
      { path: "/loginPage", element: <LoginPage /> },
      { path: "/termsOfUsePage", element: <TermsOfUse /> },
      { path: "/privacyPolicyPage", element: <PrivacyPolicy /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollProvider>
        <RootLayout />
      </ScrollProvider>
    </RouterProvider>
  );
}

export default App;