import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>

    <thead>
      <tr>
      <th className={s.tHeadCell}>Type</th>
      <th className={s.tHeadCell}>Amount</th>
      <th className={s.tHeadCell}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => {
        let { id, type, amount, currency } = item;
        return (
          <tr key={id} style={ items.indexOf(item)%2 ? { backgroundColor: 'rgb(234, 234, 234)' } : { backgroundColor: 'rgb(247, 247, 247)' } }>
            <td className={s.tCellFirst}>{
              (function toUpFirstLetter(str) {
                let arr = str.split('');
                arr.splice(0, 1, arr[0].toUpperCase()) 
                return arr.join('')
              })(type)
            }
            </td>
            <td className={s.tCellSecond}>{amount}</td>
            <td className={s.tCellLast}>{currency}</td>
          </tr>
        )
      }
      )}
    </tbody>
      
    </table> 
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired
  )
};

export default TransactionHistory;