import React, { ReactNode } from "react"
import styles from  './styles.module.scss';

interface IGridBlock {
  children: ReactNode | ReactNode[]
  title?: string
}

const GridBlock = ({ children, title }: IGridBlock) => {

  return (<div className={styles.root}>
    {
      title && (
        <div className={styles.title}>
          { title }
        </div>
      )
    }
    {children}
  </div>)
}

export default GridBlock