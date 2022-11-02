import { useLocation,  useHistory, Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { ReactNode, useEffect, useState } from 'react';

export const useRedirect = () => {  
  const extractRootSegments = ["/writings/", "/research/"]
  const { pathname,  } = useLocation()
  const base = useBaseUrl("/")

  useEffect(() => {
    const found = extractRootSegments.find(redirectItem => (pathname.includes(redirectItem)))
    if (found) {
      window.location.href = `${base}${pathname.replace(found, '')}`
    }
  }, [pathname]);

}