import { useState, useCallback } from 'react';

export function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback((value) => {
    if (value !== undefined) {
      setValue(value);
      return;
    }
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}
