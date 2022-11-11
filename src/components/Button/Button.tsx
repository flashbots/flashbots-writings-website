import { useHistory } from "@docusaurus/router";
import React, { ReactNode, useCallback } from "react"
import styles from  './styles.module.scss';

interface IButton {
  children: ReactNode | ReactNode[]
  href?: string
  action?: () => void
}

const Button = ({ children, href, action }: IButton) => {
  const history = useHistory()
  const onClick = useCallback(() => {
    action && action()
    if (href) {
      if (href.includes("http://") || href.includes("https://")) {
        // Open new tab
      } else {
        history.push(href)
      }
    }
  }, []);
  return (<button
      onClick={onClick}
      className={styles.root}
    >
    {children}
  </button>)
}

export default Button