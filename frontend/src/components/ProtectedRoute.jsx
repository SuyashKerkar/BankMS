import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user === null)
    return (
      <div className="min-h-screen bg-white text-blue-900 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold leading-tight">WELCOME TO MYBANK</h1>
        <p className="mt-4 text-lg text-blue-400">
          Banking made simple, secure, and accessible
        </p>
        <div className="mt-8">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-500 transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    );

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
