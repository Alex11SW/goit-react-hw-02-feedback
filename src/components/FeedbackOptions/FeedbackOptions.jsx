import React from 'react';
import styles from './feedbackoptions.module.css'

const FeedbackOptions  = ({ options, leaveVote }) => {
     const buttonElements = options.map(name => <button onClick={(()=>leaveVote(name))} key={name}>{name}</button>);
    return (
         <div className={styles.block}>
                    {buttonElements}
                </div>
    )
}

export default FeedbackOptions; 