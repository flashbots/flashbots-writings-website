import React, { useEffect } from 'react';
import { useLocation,  useHistory,  } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const useRedirect = () => {  
  const extractRootSegments = ["/writings/", "/research/"]
  const { pathname,  } = useLocation()
  const base = useBaseUrl("/")
  const history = useHistory()

  useEffect(() => {
    const found = extractRootSegments.find(redirectItem => (pathname.includes(redirectItem)))
    if (found) {
      history.push(`${base}${pathname.replace(found, '')}`)
    }
  }, [pathname]);
}