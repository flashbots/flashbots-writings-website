/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import type {Props} from '@theme/Layout';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import {ThemeClassNames} from '@docusaurus/theme-common';
import './styles.css';
import styles from  './styles.module.scss';
import { useRedirect } from '../../components/useRedirect';
import { Analytics } from '@vercel/analytics/react';

function Layout(props: Props): JSX.Element {
  const {children, noFooter, wrapperClassName, pageClassName} = props;
  useKeyboardNavigation();
  useRedirect()

  return (
    <LayoutProviders>
      <Analytics />
      <LayoutHead {...props} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div
        className={clsx(
          ThemeClassNames.wrapper.main,
          wrapperClassName,
          pageClassName,
          styles.layoutDefaults
        )}>
        {children}
      </div>
      
      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}

export default Layout;
