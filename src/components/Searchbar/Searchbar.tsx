import React from "react"
import styles from  './styles.module.scss';

interface ISearchbar {
  setValue: (input: string) => void
}

const Searchbar = ({ setValue }: ISearchbar) => {

  return (<input 
    placeholder="Search"
    className={styles.root} 
    autoFocus={true}
    onChange={e => setValue(e.target.value)} type="text" 
  />)
}

export default Searchbar