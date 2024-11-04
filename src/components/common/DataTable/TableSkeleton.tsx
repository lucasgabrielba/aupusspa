interface TableSkeletonProps {
  lines: number;
}

export const TableSkeleton = ({ lines }: TableSkeletonProps) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="flex items-center animate-pulse bg-secondary rounded-sm h-10 w-full space-x-5 p-2"
        >
          <div className="w-8 h-4 bg-secondary rounded" />
          <div className="w-24 h-4 bg-secondary rounded" />
          <div className="w-32 h-4 bg-secondary rounded" />
          <div className="w-40 h-4 bg-secondary rounded" />
          <div className="w-20 h-4 bg-secondary rounded" />
        </div>
      ))}
    </div>
  );
};
