import PropTypes from "prop-types";
import TransactionsList from "./transactionList/transactionList";
import css from "./transactions.module.css";

export default function Transactions({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, amount, currency, type }) => (
          <tr key={id}>
            <TransactionsList amount={amount} currency={currency} type={type} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propsTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
