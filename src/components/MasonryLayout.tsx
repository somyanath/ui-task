import React from "react";

interface MasonryLayoutProps {
  children: React.ReactElement[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: number;
  className?: string;
}

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 4,
  className = "",
}) => {
  // Distribute items across columns
  const distributeItems = (items: React.ReactElement[], numColumns: number) => {
    const columns: React.ReactElement[][] = Array.from(
      { length: numColumns },
      () => []
    );

    items.forEach((item, index) => {
      const columnIndex = index % numColumns;
      columns[columnIndex].push(item);
    });

    return columns;
  };

  const mobileColumns = distributeItems(children, columns.mobile);
  const tabletColumns = distributeItems(children, columns.tablet);
  const desktopColumns = distributeItems(children, columns.desktop);

  return (
    <div className={className}>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col" style={{ gap: `${gap}px` }}>
          {mobileColumns[0]?.map((item, index) => (
            <div key={item.key || index}>{item}</div>
          ))}
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="flex" style={{ gap: `${gap}px` }}>
          {tabletColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex-1 flex flex-col"
              style={{ gap: `${gap}px` }}
            >
              {column.map((item, index) => (
                <div key={item.key || index}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex" style={{ gap: `${gap}px` }}>
          {desktopColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex-1 flex flex-col"
              style={{ gap: `${gap}px` }}
            >
              {column.map((item, index) => (
                <div key={item.key || index}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
