import React, { useCallback, useEffect, useMemo, useState } from "react"
import styles from  './styles.module.scss';
import axios from 'axios';
import CommentIconUrl from './comment-icon.png';
import Link from "@docusaurus/Link";

interface IForumWidget {
  target: string
}

const ForumWidget = ({ target }: IForumWidget) => {
  const [commentAmount, setCommentAmount] = useState("?")

  const fetchReplyCount = useCallback(async () => {
    const res = await axios.get(`${target}.json`, {
      headers:{
        'Accept': 'application/json'
      }
    });
    const {
      posts_count
    } = res.data
    setCommentAmount(posts_count)
  }, [target])

  useEffect(() => {
    fetchReplyCount()
  }, [target])

  return (<Link to={target} className={styles.root}>
    <div className={styles.icon}>
      <img src={CommentIconUrl} alt="comment icon" />
    </div>
    <span>
      {commentAmount}
    </span>
  </Link>)
}

export default ForumWidget