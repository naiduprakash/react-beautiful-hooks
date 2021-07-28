import React from 'react';
import Box from '../../components/Box';
import Stack from '../../components/Stack';

import { useBoolean } from '../../lib/useBoolean';

export function Example1() {
  const [flag, setFlag] = useBoolean();

  return (
    <div>
      <p>Boolean state: {JSON.stringify(flag)}</p>
      <button onClick={setFlag.toggle}>Click me to toggle the boolean value</button>
    </div>
  );
}

export function Example2() {
  const [flag, setFlag] = useBoolean();

  return (
    <div>
      <p>Boolean state: {JSON.stringify(flag)}</p>

      <div
        style={{ border: '1px solid #dddddd', borderRadius: '4px', padding: '10px' }}
        onMouseEnter={setFlag.on}
        onMouseLeave={setFlag.off}
      >
        {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
      </div>
    </div>
  );
}

export default function Examples() {
  return (
    <div>
      <p>useBoolean</p>
      <Stack direction="row">
        <Box>
          <span>Example 1</span>
          <Example1 />
        </Box>

        <Box style={{ marginLeft: '15px' }}>
          <span>Example 2</span>
          <Example2 />
        </Box>
      </Stack>
    </div>
  );
}
