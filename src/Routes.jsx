import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar1 from "components/Sidebar1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedRoutes from "components/AnimatedRoutes/AnimatedRoutes";
import { MoonLoader } from "react-spinners";

const ProjectRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center mt-[200px]">
          <MoonLoader color="#ff8600" />
        </div>
      }
    >
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
