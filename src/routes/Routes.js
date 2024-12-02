import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Layout = lazy(() => import("../pages/userDashboard/components/Layout/Layout"));
const LayoutAdmin = lazy(() => import("../pages/adminDashboard/LayoutAdmin/LayoutAdmin"));
const CreateServerForm = lazy(() => import("../pages/adminDashboard/createServerForm/CreateServerForm"));
const LoginAuth = lazy(() => import("../pages/adminDashboard/loginAuth/LoginAuth"));
const Servers = lazy(() => import("../pages/adminDashboard/Servers/Servers"));
const Dashboard = lazy(() => import("../pages/userDashboard/components/dashboard/Dashboard"));
const Balance = lazy(() => import("../pages/userDashboard/components/Balance/Balance"));
const Register = lazy(() => import("../pages/userDashboard/register/Register"));
const Tariffs = lazy(() => import("../pages/userDashboard/components/Tariffs/Tariffs"));
const PaymentForm = lazy(() => import("../pages/userDashboard/components/PaymentForm/PaymentForm"));
const Profile = lazy(() => import("../pages/userDashboard/components/Profile/Profile"));
const BannerVPS = lazy(() => import("../pages/bannerVps/BannerVPS"));


// Define routes
const routes = [
  { path: "/", element: <Home />, protected: false },
  { path: "*", element: <NotFoundPage />, protected: false },
  { path: "/userAuth", element: <Layout />, protected: false },
  { path: "/userAuth/dashboard", element: <Dashboard />, protected: true },
  { path: "/userAuth/new", element: <Tariffs />, protected: true },
  { path: "/userAuth/balance", element: <Balance />, protected: true },
  { path: "/userAuth/login", element: <Register />, protected: false },
  { path: "/userAuth/payment", element: <PaymentForm />, protected: true },
  { path: "/userAuth/profile", element: <Profile />, protected: true },
  { path: "/case/:id", element: <BannerVPS />, protected: false },


  // Admin
  { path: "/auth/admin", element: <LayoutAdmin />, protected: false },
  { path: "/auth/admin/create", element: <CreateServerForm />, protected: false },
  { path: "/auth/admin/servers", element: <Servers />, protected: false },
  { path: "/auth/admin/login", element: <LoginAuth />, protected: false },
];

export default routes;



