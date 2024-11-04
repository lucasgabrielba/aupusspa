import { PhoneDTO } from '@/types/dtos/phones-dto';
import { Getter } from '@tanstack/react-table';
import { nanoid } from 'nanoid';

interface PhonesCellProps {
  value: Getter<PhoneDTO[]>;
}

export function PhonesCell({ value }: PhonesCellProps) {
  const phones = value();

  return (
    <div className="flex flex-wrap">
      {phones.map((phone) => (
        <div key={nanoid()} className="mr-2 whitespace-nowrap">
          {phone.phone_number}
        </div>
      ))}
    </div>
  );
}
