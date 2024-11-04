import { type ComponentProps, useEffect, useState } from 'react';
import { getAttachmentUrl } from '../common/AttachmentsCard/getFileTypeLabel';
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

  function handleError() {
    setSource( fallbackSrc);
  }

  useEffect(() => {
    if (brand) {
      setSource(brand?.logoPath || src);
    }
  }, []);

  return <img src={getAttachmentUrl(source || '')} onError={handleError} {...otherProps} />;
}
