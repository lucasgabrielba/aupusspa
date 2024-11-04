import type { SetStateAction } from 'react';
import * as React from 'react';

export function useFormInput(initialValue = '') {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}
