import React from 'react';
import styles from './ResultTable.module.css';

const ResultTable = (props) => {
  if (props.data?.length > 0) {
    return (
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return <div className={styles.alert}>Please complete and submit the above form!</div>;
};

export default ResultTable;
