import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, children, ...props }, ref) => (
    <div ref={ref} {...props} className="inline-block rounded-full overflow-hidden w-10 h-10 bg-gray-200">
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : children}
    </div>
  )
);
Avatar.displayName = "Avatar";

export const AvatarImage = ({ src, alt }: { src: string; alt?: string }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" />
);

export const AvatarFallback = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center justify-center w-full h-full text-gray-500 bg-gray-100 rounded-full">
    {children}
  </span>
);
