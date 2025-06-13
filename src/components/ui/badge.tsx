import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ color = "#e5e7eb", children, ...props }, ref) => (
    <span
      ref={ref}
      {...props}
      style={{ backgroundColor: color, ...props.style }}
      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${props.className || ""}`.trim()}
    >
      {children}
    </span>
  )
);
Badge.displayName = "Badge";
