import React, { useEffect } from 'react';
import { useLocation,  useHistory,  } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const useRedirect = () => {
  const redirectLocations = [
    {
      source: '/writings',
      destination: '/',
    },
  ];
  const extractRootSegments = ["/writings/", "/research/"]
  const { pathname,  } = useLocation()
  const base = useBaseUrl("/")
  const history = useHistory()

  useEffect(() => {
    redirectLocations.forEach(redirectRule => {
      if (redirectRule.source == pathname) {
        history.push(redirectRule.destination)
      }
    });

    const found = extractRootSegments.find(redirectItem => (pathname.includes(redirectItem)))
    if (found) {
      history.push(`${base}${pathname.replace(found, '')}`)
    }
  }, [pathname]);
}
