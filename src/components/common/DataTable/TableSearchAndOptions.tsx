import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { SearchInput } from './SearchInput';
import { SelectViewerColumns } from './SelectViewerColumns';

interface TableSearchAndOptionsProps<T> {
  table: Table<T>;
  searchAnOptionsProps: {
    value: string;
    setValue: (value: string) => void;
    inputProps: {
      id: string;
      placeholder: string;
    };
    hasSelectedRows?: boolean;
    setRowSelection?: (selection: object) => void;
    entity?: string;
    button?: {
      url: string;
      text: string;
      icon: React.ReactNode;
      className?: string;
    };
  };
  children?: React.ReactNode;
}

export const TableSearchAndOptions = <T,>({
  table,
  searchAnOptionsProps: {
    value,
    setValue,
    inputProps,
    button,
  },
  children,
}: TableSearchAndOptionsProps<T>) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-4">
      {/* Mobile layout: input and children side by side */}
      <div className="flex flex-row items-center w-full gap-1 lg:hidden">
        <SearchInput value={value} setValue={setValue} inputProps={inputProps} />
        {children}
      </div>

      {/* Desktop layout: input only */}
      <div className="flex-row items-center w-full gap-1 hidden lg:flex">
        <SearchInput value={value} setValue={setValue} inputProps={inputProps} />
      </div>

      <div className="flex lg:flex-row flex-col gap-3 w-full lg:w-2/5">
        {/* Children for desktop layout */}
        <div className="hidden lg:flex">{children}</div>
        <SelectViewerColumns table={table} />
        {button && (
          <Button
            onClick={() => navigate(button.url)}
            className={`w-full gap-2 ${button.className}`}
          >
            {button.icon}
            {button.text}
          </Button>
        )}
      </div>
    </div>
  );
};
