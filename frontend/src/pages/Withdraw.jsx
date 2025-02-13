import { useState, useContext } from "react";
import { withdrawMoney } from "../services/transactionService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleWithdraw = async (e) => {
    e.preventDefault();
    await withdrawMoney(amount, user.token, user.id);
    navigate("/transactions");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold">Withdraw Money</h2>
      <form onSubmit={handleWithdraw}>
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          className="border p-2 w-full mt-2"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-red-500 text-white px-4 py-2 mt-3">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
