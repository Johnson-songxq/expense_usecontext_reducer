import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            id="text"
            placeholder="Enter text ..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            id="amount"
            placeholder="Enter amount ..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};
