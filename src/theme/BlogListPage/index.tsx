/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo, useState } from "react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import BlogLayout from "@theme/BlogLayout"
import BlogPostItem from "@theme/BlogPostItem"
import BlogListPaginator from "@theme/BlogListPaginator"
import TagsListInline from "@theme/TagsListInline"
import type { Props } from "@theme/BlogListPage"
import { ThemeClassNames } from "@docusaurus/theme-common"

import { Metadata } from "@theme/BlogPostPage"
import clsx from "clsx"
import styles from "./styles.module.scss"

import Searchbar from "../../components/Searchbar/Searchbar"

const POST_PER_PAGE = 10

const extractTags = ({ items }: Props) => {
  const newCollection: Record<string, {
    permalink: string,
    count: number
  }> = {}
  items
    .map(
      ({ content: BlogPostContent }) => BlogPostContent.metadata.tags
        .map(tag => {
          if (!newCollection[tag.label]) {
            newCollection[tag.label] = {
              permalink: tag.permalink,
              count: 1
            }
          } else {
            newCollection[tag.label].count++;
          }
        }))
  return Object.keys(newCollection).map(key => ({
    label: key,
    permalink: newCollection[key].permalink,
    count: newCollection[key].count
  }))
}

const paginate = function (array: Array<any>[], index: number, size: number): any[] {
  // transform values
  index = Math.abs(index);
  index = index > 0 ? index - 1 : index;
  size = size < 1 ? 1 : size;
  // filter
  return [...(array.filter((value, n) => {
      return (n >= (index * size)) && (n < ((index+1) * size))
  }))]
}



function BlogListPage(props: Props): JSX.Element {
  const { metadata, items, location } = props
  const {
    siteConfig: { title: siteTitle }
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === "/"
  const title = isBlogOnlyMode ? siteTitle : blogTitle

  const tags = extractTags(props)

  const [page, setPage] = useState(0)

  const currentPage = useMemo(() => {
    // @ts-ignore: Readonly prevents mutation calls
    return paginate([...items], page + 1, POST_PER_PAGE)
  }, [items, page])

  // @ts-ignore: Destructuring doesn't ensure type fulfillment
  const settings: Metadata = useMemo(() => ({
    ...metadata,
    blogTitle: metadata.blogTitle,
    blogDescription: metadata.blogDescription,
    page,
    postsPerPage: POST_PER_PAGE,
    nextPage: (page + 1) * POST_PER_PAGE < metadata.totalCount ? () => setPage(page + 1) : undefined,
    previousPage: page >= 1 ? () => setPage(page - 1) : undefined,
    totalPages: Math.ceil(metadata.totalCount / POST_PER_PAGE)
  }), [metadata, page])


  const [searchFilter, setSearchFilter] = useState("")
  return (
    <BlogLayout
      title={title}
      description={blogDescription}
      wrapperClassName={clsx(ThemeClassNames.wrapper.blogPages, styles.blogPageRoot)}
      pageClassName={ThemeClassNames.page.blogListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: "blog_posts_list"
      }}
      // sidebar={sidebar}
    >
      <div className={styles.header}>
        <h1>
          Writings & Research
        </h1>
        <p>A collection of articles and papers from Flashbots.</p>
      </div>
      <TagsListInline tags={tags} />
      <Searchbar setValue={setSearchFilter}/>
      {currentPage.filter(item => searchFilter === "" || item.content.frontMatter.title.toLowerCase().includes(searchFilter.toLowerCase())).map(({ content: BlogPostContent }) => (
        <BlogPostItem
          key={BlogPostContent.metadata.permalink}
          frontMatter={BlogPostContent.frontMatter}
          assets={BlogPostContent.assets}
          metadata={BlogPostContent.metadata}
          truncated={BlogPostContent.metadata.truncated}>
          <BlogPostContent />
        </BlogPostItem>
      ))}
      <BlogListPaginator metadata={settings} />
    </BlogLayout>
  )
}

export default BlogListPage
