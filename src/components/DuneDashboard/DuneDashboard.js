import React from 'react';
import styles from  './styles.module.scss';

export default function DuneDashboard({source, label, aspectRatio}) {
  if (!source) return null

  return (
    <div className={styles.DuneDashboard} style={{"--aspect-ratio": aspectRatio}}>
      <iframe src={source} className={styles.root} />
      <div className={styles.labels}>
        {label && <div>{label}</div>}
      </div>
    </div>
  );
}
