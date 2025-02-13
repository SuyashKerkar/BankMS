import { useState, useEffect, useContext } from "react";
import { getTransactions } from "../services/transactionService";
import { AuthContext } from "../context/AuthContext";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (!user?.id || !user?.token) return; // Prevent API call if user is undefined
        const data = await getTransactions(user.id, user.token);
        console.log("Transaction API Response:", data); // Debugging

        // Extract transactions array safely
        if (data && Array.isArray(data.transactions)) {
          setTransactions(data.transactions);
        } else {
          setTransactions([]); // Fallback in case of unexpected API response
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, [user?.id, user?.token]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold">Transaction History</h2>
      <ul className="mt-4 border rounded-lg p-4">
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          transactions.map((txn, index) => (
            <li key={index} className="border-b p-2">
              {txn.type.toUpperCase()} - ₹{txn.amount} on{" "}
              {new Date(txn.created_at).toLocaleString()}{" "}
              {/* Fixes txn.date issue */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Transactions;
