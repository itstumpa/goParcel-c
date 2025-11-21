// routes/routeConfig.js
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute.jsx";

// Layouts
import AuthLayout from "../components/Layout/AuthLayout";
import MainLayouts from "../components/Layout/MainLayouts";

// Pages
import PrivacyPolicy from "../components/Footer/PrivacyPolicy.jsx";
import About from "../Pages/About.jsx";
import BeARider from "../Pages/BeARider/BeARider.jsx";
import Coverage from "../Pages/Coverage/Coverage.jsx";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile.jsx";
import Pricing from "../Pages/Pricing/Pricing.jsx";
import Services from "../Pages/Services/Services.jsx";

import Login from "../Pages/Auth/Login/Login.jsx";
import Register from "../Pages/Auth/Register/Register.jsx";
import ForgotPassword from "../Pages/Auth/ForgotPassword.jsx";
import ResetPassword from "../Pages/Auth/ResetPassword.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      // Public routes
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/be-a-rider", element: <BeARider /> },
      // { path: "/forgot-password", element: <ForgotPassword /> },
      // { path: "/reset-password", element: <ResetPassword /> },
      { path: "/services", element: <Services /> },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () =>
          fetch("/public/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },

  // Auth routes group
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },

  // Protected routes group
  {
    element: <PrivateRoute />,
    children: [
      { path: "myprofile", element: <MyProfile /> },
      // { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

export default router;
