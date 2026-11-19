import React, { useEffect, useState } from 'react';

export default function Router({ routes }) {
  const [currentPath, setCurrentPath] = useState(
    `${window.location.pathname}${window.location.search}`
  );

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(`${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const navigate = (to) => {
    if (!to) return;
    const target = new URL(to, window.location.origin);
    window.history.pushState({}, '', `${target.pathname}${target.search}${target.hash}`);
    setCurrentPath(`${target.pathname}${target.search}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pathname = currentPath.split('?')[0].replace(/\/+$/, '') || '/';
  const match = routes.find((route) => route.path === pathname)
    || routes.find((route) => route.path === '*');
  const Component = match?.element;

  return Component ? <Component navigate={navigate} /> : null;
}
