import * as React from "react";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props} className={`overflow-auto ${props.className || ""}`.trim()}>
      {children}
    </div>
  )
);
ScrollArea.displayName = "ScrollArea";

export const ScrollBar = () => null;
