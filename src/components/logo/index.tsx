import { type ComponentProps, useEffect, useState } from 'react';
import { useOrganizationsStore } from '@/store/useOrganizationsStore';

type LogoProps = {
  src: string;
  alt?: string;
  fallbackSrc?: string;
};

export function Logo({
  src,
  fallbackSrc,
  ...otherProps
}: LogoProps & ComponentProps<'img'>) {
  const { brand } = useOrganizationsStore();

  const [source, setSource] = useState(src);
  source
  function handleError() {
    setSource( fallbackSrc);
  }

  useEffect(() => {
    if (brand) {
      setSource(brand?.logoPath || src);
    }
  }, []);

  return <img src='' onError={handleError} {...otherProps} />;
}
