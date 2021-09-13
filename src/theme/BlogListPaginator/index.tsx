/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"
import Translate, { translate } from "@docusaurus/Translate"

export interface IMetadata {
  blogDescription: string
  blogTitle: string
  nextPage: () => void | undefined
  page: number
  permalink?: string
  postsPerPage: number
  previousPage: () => void | undefined
  totalCount: number
  totalPages: number
}

export interface IBlogListPaginator {
  metadata: IMetadata
}

const BlogListPaginator = ({ metadata: {
  previousPage,
  nextPage
} }: IBlogListPaginator) => {

  return (
    <nav
      className="pagination-nav"
      aria-label={translate({
        id: "theme.blog.paginator.navAriaLabel",
        message: "Blog list page navigation",
        description: "The ARIA label for the blog pagination"
      })}>
      <div className="pagination-nav__item">
        {previousPage && (
          <div className="pagination-nav__link"
            onClick={previousPage}>
            <div className="pagination-nav__label">
              &laquo;{" "}
              <Translate
                id="theme.blog.paginator.newerEntries"
                description="The label used to navigate to the newer blog posts page (previous page)">
                Newer Entries
              </Translate>
            </div>
          </div>
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {nextPage && (
          <div className="pagination-nav__link"
            onClick={nextPage}>
            <div className="pagination-nav__label">
              <Translate
                id="theme.blog.paginator.olderEntries"
                description="The label used to navigate to the older blog posts page (next page)">
                Older Entries
              </Translate>{" "}
              &raquo;
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default BlogListPaginator
