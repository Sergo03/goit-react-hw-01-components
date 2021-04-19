import React from 'react';
import PropsTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {

    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr >
                    <th className={styles.head}>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {
                items.map(({id,type,amount,currency}) => (
                    <tbody key={id}>
                        <tr >
                            <td className={styles.table}>{type}</td>
                            <td className={styles.table}>{amount}</td>
                            <td className={styles.table}>{currency}</td>
                        </tr>
                    </tbody>
                ))
            }
        </table>
    )
};
    
TransactionHistory.propTypes = {
   items:PropsTypes.array.isRequired
}


export default TransactionHistory;
