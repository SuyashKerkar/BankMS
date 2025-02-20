import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./index.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transactions from "./pages/Transactions";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user } = useContext(AuthContext); // Get user state

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Redirect if already logged in */}
        <Route
          path="/"
          element={
            user === null ? (
              <div className="min-h-screen bg-white text-blue-900 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold leading-tight">
                  WELCOME TO MYBANK
                </h1>
                <p className="mt-4 text-lg text-blue-400">
                  Banking made simple, secure, and accessible
                </p>
                <div className="mt-8">
                  <a className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-500 transition duration-300">
                    Get Started
                  </a>
                </div>
              </div>
            ) : user ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/dashboard" /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <ProtectedRoute>
              <Deposit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
