import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount >= 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);

  console.log("transaction", transaction);

  const handleDel = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={handleDel}>
        x
      </button>
    </li>
  );
};
