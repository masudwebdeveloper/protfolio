// Tooltip.tsx
import React, { ReactNode, useRef } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    tooltipRef.current?.classList.add(
      "opacity-100",
      "scale-100"
    );
    tooltipRef.current?.classList.remove(
      "scale-0",
      "opacity-0"
    );
  };

  const hideTooltip = () => {
    tooltipRef.current?.classList.remove(
      "opacity-100",
      "scale-0"
    );
    tooltipRef.current?.classList.add(
      "scale-100",
      "opacity-0"
    );
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div
        ref={tooltipRef}
        className="absolute z-10 left-1/2 px-2 py-1 text-white dark:text-black bg-black dark:bg-white bg-opacity-75 rounded shadow-md whitespace-nowrap opacity-0 translate-y-1 transform -translate-x-1/2 transition-opacity duration-500 ease-in-out"
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
