import { useState, useContext } from "react";
import { depositMoney } from "../services/transactionService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Deposit = () => {
  const [amount, setAmount] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeposit = async (e) => {
    e.preventDefault();
    await depositMoney(amount, user.token, user.id);
    navigate("/transactions");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold">Deposit Money</h2>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          className="border p-2 w-full mt-2"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 mt-3">
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
