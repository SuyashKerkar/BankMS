import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { getBalance } from "../services/transactionService";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const newBalance = await getBalance(user.id, user.token);
        setBalance(newBalance);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBalance();
  }, []); // Added dependency array to prevent infinite re-renders

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-extrabold text-gray-700">
          Welcome, {user.name}
        </h2>
        <p className="mt-2 text-lg font-medium text-gray-600">Your Balance:</p>
        <p className="text-3xl font-bold text-green-500 animate-pulse">
          ₹{balance}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            to="/deposit"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Deposit
          </Link>
          <Link
            to="/withdraw"
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Withdraw
          </Link>
          <Link
            to="/transactions"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Transactions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
