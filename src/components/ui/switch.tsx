import * as React from "react";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = "", ...props }, ref) => (
    <label className={`relative inline-block w-12 h-6 align-middle select-none ${className}`}>
      <input
        type="checkbox"
        ref={ref}
        className="peer absolute opacity-0 w-0 h-0"
        {...props}
      />
      <span
        className="block w-12 h-6 rounded-full bg-gray-300 peer-checked:bg-green-500 transition-colors duration-200"
      />
      <span
        className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-6"
      />
    </label>
  )
);
Switch.displayName = "Switch";
