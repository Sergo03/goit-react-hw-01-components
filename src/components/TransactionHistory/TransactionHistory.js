import React from 'react';
import PropsTypes from 'prop-types';

const TransactionHistory = ({ items }) => {

    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {
                items.map(({id,type,amount,currency}) => (
                    <tbody key={id}>
                        <tr>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
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
