import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold ">MYBANK App</h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="hidden sm:inline-block text-sm">
              Welcome, {user.name}
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:underline">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition duration-200"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
