/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';
// import BlogSidebar from '@theme/BlogSidebar';
import TOC from '@theme/TOC';
import styles from  './styles.module.scss';

import type {Props} from '@theme/BlogLayout';

function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props;
  // const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className={clsx("container", "margin-vert--md", styles.containerRoot)}>
        <div className="row">
          {/* {hasSidebar && (
            <aside className="col col--3">
              <BlogSidebar sidebar={sidebar!} />
            </aside>
          )} */}
          <main
            className={clsx('col', {
              // 'col--7': hasSidebar,
              // 'col--9 col--offset-1': !hasSidebar,
              'col--12': true,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && (
            <div className={clsx("col", "col--2", styles.TOC)}>
              <TOC toc={toc} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogLayout;
