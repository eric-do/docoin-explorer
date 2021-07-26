import { renderHook, act } from '@testing-library/react-hooks';
import { useTracking } from '.';

it('should use tracking', () => {
  const { result } = renderHook(() => useTracking('test'));

  expect(result.current.clicks).toBe(0);
})

it('should increment clicks', () => {
  const { result } = renderHook(() => useTracking('test'));
  act(() => result.current.incrementClicks())
  expect(result.current.clicks).toBe(1);
})