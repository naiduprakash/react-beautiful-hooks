import { useCallback } from 'react';
import { useToggle } from '../useToggle';

export function useBoolean(initialState = false) {
  const [value, toggleValue] = useToggle(initialState);

  const on = useCallback(() => {
    toggleValue(true);
  }, [toggleValue]);

  const off = useCallback(() => {
    toggleValue(false);
  }, [toggleValue]);

  const toggle = useCallback(() => {
    toggleValue();
  }, [toggleValue]);

  return [value, { on, off, toggle }];
}
