import React, { useCallback } from 'react';

export const useTracking = (id: string) => {
  const [clicks, setCount] = React.useState<number>(0);

  // To refactor to an API call later
  const incrementClicks = useCallback(() => setCount(prevCount => prevCount + 1), []);

  return {clicks, incrementClicks};
};