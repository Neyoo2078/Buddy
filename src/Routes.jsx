import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Sidebar1 from "components/Sidebar1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedRoutes from "components/AnimatedRoutes/AnimatedRoutes";
import { AnimatePresence } from "framer-motion";
const LoginScreenactive = React.lazy(() => import("pages/LoginScreenactive"));
const LoginScreen = React.lazy(() => import("pages/LoginScreen"));
const VerifyemailOne = React.lazy(() => import("pages/VerifyemailOne"));
const Verifyemail = React.lazy(() => import("pages/Verifyemail"));
const Signedup = React.lazy(() => import("pages/Signedup"));
const SignupScreenactive = React.lazy(() => import("pages/SignupScreenactive"));
const SignupScreenOne = React.lazy(() => import("pages/SignupScreenOne"));
const BuddyDashboardOne = React.lazy(() => import("pages/BuddyDashboardOne"));
const BuddyDashboard = React.lazy(() => import("pages/BuddyDashboard"));
const SignupScreen = React.lazy(() => import("pages/SignupScreen"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <ToastContainer limit={1} position="top-center" />
        <div className="bg-gray-100 flex flex-col font-lexend items-center justify-start mx-auto w-full">
          <div className="flex  flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[250px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <AnimatedRoutes />
          </div>
        </div>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
