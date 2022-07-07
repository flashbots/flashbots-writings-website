/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/Logo';

import Link from '@docusaurus/Link';
// import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from "./styles.module.scss"
import clsx from 'clsx';

const Logo = (props: Props): JSX.Element => {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo = {src: ''}},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo.href || '/');
  // const sources = {
  //   light: useBaseUrl(logo.src),
  //   dark: useBaseUrl(logo.srcDark || logo.src),
  // };

  return (
    <Link
      className={styles.wrapper}
      to={logoLink}
      {...propsRest}
      {...(logo.target && {target: logo.target})}>

        {/* Disabled config image for explict Logo SVG */}

      {/* {logo.src && (
        <ThemedImage
          className={imageClassName}
          sources={sources}
          alt={logo.alt || navbarTitle || title}
        />
      )} */}
      <svg width="12" height="14" viewBox="0 0 12 14">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.07289 0L7.91879 0.483459L6.631 4.76674H11.5178L4.19989 12.679L3.35398 12.1956L4.72089 7.64736H0L7.07289 0ZM5.20514 6.03608L6.33835 2.26697L2.28701 6.64736H5.02136L5.20514 6.03608ZM4.93407 10.4124L9.23077 5.76674H6.33078L6.16271 6.3243L4.93407 10.4124Z" fill="var(--ifm-font-color-base)"></path>
      </svg>
      {navbarTitle != null && <span className={clsx(titleClassName, styles.logoTitle)}>{navbarTitle}</span>}
    </Link>
  );
};

export default Logo;
