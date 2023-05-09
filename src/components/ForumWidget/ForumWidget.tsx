import React, { useCallback, useEffect, useMemo, useState } from "react"
import styles from  './styles.module.scss';
import axios from 'axios';
import Link from "@docusaurus/Link";
import useFrontMatter from '@theme/useFrontMatter';

interface ForumFrontmatter {
  forum_link: string | undefined
}

const ForumWidget = () => {
  const {
    forum_link
  } = useFrontMatter<ForumFrontmatter>();

  const [commentAmount, setCommentAmount] = useState(-1)

  const fetchReplyCount = useCallback(async () => {
    const res = await axios.get(`${forum_link}.json`, {
      headers:{
        'Accept': 'application/json'
      }
    });
    const {
      posts_count
    } = res.data
    setCommentAmount(posts_count)
  }, [forum_link])

  useEffect(() => {
    if (forum_link && commentAmount === -1) {
      fetchReplyCount()
    }
  }, [forum_link])

  return (
    forum_link !== undefined ? 
      <Link to={forum_link} className={styles.root}>
        <div className={styles.icon}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.60449 8.97677C4.47333 8.95497 4.33889 8.9863 4.23088 9.06385C3.67315 9.4643 2.98928 9.7002 2.24999 9.7002C2.17307 9.7002 2.09675 9.69764 2.02112 9.69261C2.26644 9.2902 2.41227 8.82034 2.42419 8.31719C2.42782 8.16418 2.36117 8.01793 2.2433 7.9203C1.35318 7.18294 0.799988 6.14704 0.799988 5.0002C0.799988 2.76701 2.90025 0.950195 5.49999 0.950195C8.09973 0.950195 10.2 2.76701 10.2 5.0002C10.2 7.23338 8.09973 9.05019 5.49999 9.05019C5.19375 9.05019 4.89437 9.02496 4.60449 8.97677Z" stroke="#1C1E21" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>
          { 
            commentAmount > 0 && `${commentAmount} replies`
          }
          {
            commentAmount <= 0 && "Leave a reply"
          }
        </span>
      </Link> : <></>
  )
}

export default ForumWidget