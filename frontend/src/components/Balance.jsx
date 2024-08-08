import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBalance(Math.floor(response.data.balance)); // Use Math.floor to round down
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-[#e0fbfc] p-4 rounded-lg">
      <div className="font-bold text-lg text-[#3d5a80]">Your balance</div>
      <div className="font-semibold ml-4 text-lg text-[#293241]">Rs {balance}</div>
    </div>
  );
};
