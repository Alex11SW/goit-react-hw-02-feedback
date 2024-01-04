import React from 'react';
import styles from './statistics.module.css'

 const Statistics = ({ total, Good, Neutral, Bad, feedback}) => {     
    return (
      <div className={styles.block}>
                    <p>Good: {Good}</p>
                    <p>Neutral: {Neutral}</p>
                    <p>Bad: {Bad}</p>
                    <p>Total: {total}</p>
                    <p className={styles.feedback}>Positive feedback: {feedback}%</p>
                </div>
    )
}

export default Statistics;