import * as React from 'react';
import { debounce } from 'lodash';

export function useDebouncedSearch(initialValue = '', delay = 500) {
  const [value, setValue] = React.useState(initialValue);
  const [debouncedValue, setDebouncedValue] = React.useState(initialValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = React.useCallback(
    debounce(setDebouncedValue, delay),
    [delay],
  );

  React.useEffect(() => {
    debouncedSetValue(value);

    return () => {
      debouncedSetValue.cancel();
    };
  }, [value, debouncedSetValue]);

  return { value, setValue, debouncedValue };
}
