/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluralForm} from '@docusaurus/theme-common';
import MDXComponents from '@theme/MDXComponents';
import EditThisPage from '@theme/EditThisPage';
import type {Props} from '@theme/BlogPostItem';

import styles from './styles.module.css';
import TagsListInline from '@theme/TagsListInline';
import BlogPostAuthors from '@theme/BlogPostAuthors';
import dayjs from 'dayjs';
import ForumWidget from "@site/src/components/ForumWidget/ForumWidget";
import { Context } from '@theme/useFrontMatter';

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}

function BlogPostItem(props: Props): JSX.Element {
  const readingTimePlural = useReadingTimePlural();
  const {withBaseUrl} = useBaseUrlUtils();
  const {
    children,
    frontMatter,
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors,
  } = metadata;

  const image = assets.image ?? frontMatter.image;

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

    return (
      <header>
        <TitleHeading className={styles.blogPostTitle} itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            <Link itemProp="url" to={permalink}>
              {title}
            </Link>
          )}
        </TitleHeading>
        <BlogPostAuthors authors={authors} assets={assets} />
        <div className={clsx(styles.blogPostData, 'margin-hori--md')}>
          <span>
            <time dateTime={date} itemProp="datePublished">
              { dayjs(date).format("DD.MM.YY") }
            </time>

            {typeof readingTime !== 'undefined' && (
              <>
                {' · '}
                {readingTimePlural(readingTime)}
              </>
            )}
          </span>
          <ForumWidget/>
        </div>
      </header>
    );
  };

  return (
    <Context.Provider value={props.frontMatter}>

      <article
        className={!isBlogPostPage ? 'margin-bottom--lg' : undefined}
        itemProp="blogPost"
        itemScope
        itemType="http://schema.org/BlogPosting">
        {renderPostHeader()}

        {image && (
          <meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
        )}

        <div className="markdown" itemProp="articleBody">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </div>
    
        {/* {(tags.length > 0 || truncated) && (
          <footer
            className={clsx('row docusaurus-mt-lg', {
              [styles.blogPostDetailsFull]: isBlogPostPage,
            })}>
            {tags.length > 0 && (
              <div className={clsx('col', {'col--9': !isBlogPostPage})}>
                <TagsListInline tags={tags} />
              </div>
            )}

            {isBlogPostPage && editUrl && (
              <div className="col margin-top--sm">
                <EditThisPage editUrl={editUrl} />
              </div>
            )}

            {!isBlogPostPage && truncated && (
              <div className="col col--3 text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}>
                  <b>
                    <Translate
                      id="theme.blog.post.readMore"
                      description="The label used in blog post item excerpts to link to full blog posts">
                      Read More
                    </Translate>
                  </b>
                </Link>
              </div>
            )}
          </footer>
        )} */}
      </article>
    </Context.Provider>
  );
}

export default BlogPostItem;
