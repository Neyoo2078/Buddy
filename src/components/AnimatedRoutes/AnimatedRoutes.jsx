import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import { AnimatePresence } from "framer-motion";
const LoginScreenactive = React.lazy(() => import("pages/LoginScreenactive"));
const VerifyemailOne = React.lazy(() => import("pages/VerifyemailOne"));
const Verifyemail = React.lazy(() => import("pages/Verifyemail"));
const SignupScreenactive = React.lazy(() => import("pages/SignupScreenactive"));
const BuddyDashboardOne = React.lazy(() => import("pages/BuddyDashboardOne"));
const BuddyDashboard = React.lazy(() => import("pages/BuddyDashboard"));
const SignupScreen = React.lazy(() => import("pages/SignupScreen"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginScreenactive />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/messages" element={<BuddyDashboard />} />
        <Route path="/buddydashboardone" element={<SignupScreen />} />
        <Route path="/signupscreenactive" element={<SignupScreenactive />} />
        <Route path="/verifyemail" element={<Verifyemail />} />
        <Route path="/verifyemailone" element={<VerifyemailOne />} />
        <Route path="/portfolio" element={<BuddyDashboardOne />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
