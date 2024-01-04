import React from 'react';
import styles from './section.module.css'


const Section = ({ title, children, isStatistics }) => {
  const sectionClass = isStatistics ? styles.statisticsSection : styles.section;
   const wrapperClass = isStatistics ? styles.statisticsWrapper : styles.wrapper;
    return (
     <div className={wrapperClass}>
         <div className={sectionClass}>
            <h2 className={styles.title}>{title}</h2>
             {children}
          </div>
      </div>
  );
};

export default Section;