import React from 'react';

import Box from '../../components/Box';
import Stack from '../../components/Stack';
import { useToggle } from '../../lib/useToggle';

export function Example1() {
  const [flag, toggle] = useToggle();

  return (
    <div>
      <p>Flag : {JSON.stringify(flag)}</p>
      <button onClick={() => toggle()}>Click me to toggle</button>
    </div>
  );
}

export default function Examples() {
  return (
    <div>
      <p>useToggle:</p>
      <Stack direction="row">
        <Box>
          <span>Example 1</span>
          <Example1 />
        </Box>
      </Stack>
    </div>
  );
}
