import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<"a">>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "font-medium transition-colors hover:text-primary",
          className
        )}
        {...props}
      />
    );
  }
);