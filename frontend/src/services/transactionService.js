import axios from "axios";

const API_URL = "http://localhost:5000/api/";

export const depositMoney = async (amount, token, user_id) => {
  await axios.post(
    `${API_URL}transactions/deposit`,
    { user_id, amount },
    { headers: { Authorization: token } }
  );
};

export const withdrawMoney = async (amount, token, user_id) => {
  await axios.post(
    `${API_URL}transactions/withdraw`,
    { user_id, amount },
    { headers: { Authorization: token } }
  );
};

export const getTransactions = async (user_id, token) => {
  const res = await axios.post(
    `${API_URL}transactions/history`,
    { user_id },
    { headers: { Authorization: token } }
  );
  return res.data;
};

export const getBalance = async (user_id, token) => {
  const res = await axios.post(
    `${API_URL}users/balance`,
    { user_id },
    { headers: { Authorization: token } }
  );
  console.log(res);
  return res.data.balance;
};
