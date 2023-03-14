import React, { useCallback, useMemo } from "react"
import styles from  './styles.module.scss';
import axios from 'axios';

interface IForumWidget {
  target: string
}

const ForumWidget = ({ target }: IForumWidget) => {
  const commentAmount = useMemo(async () => {
    const res = await axios.get(`${target}.json`);
    const {
      posts_count
    } = res.data
    return posts_count
  }, [target])

  return (<div className={styles.root}>
    <div>
      <img src="./comment-icon.png" alt="comment icon" />
    </div>
    <span>
      {commentAmount}
    </span>
  </div>)
}

export default ForumWidget