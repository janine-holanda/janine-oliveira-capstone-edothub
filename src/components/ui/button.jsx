import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-rose-300",
  {
    variants: {
      variant: {
        default:
          "bg-rose-900 text-rose-50 shadow hover:bg-rose-900/90 dark:bg-rose-50 dark:text-rose-900 dark:hover:bg-rose-50/90",
        destructive:
          "bg-red-500 text-rose-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-rose-50 dark:hover:bg-red-900/90",
        outline:
          "border border-rose-200 bg-white shadow-sm hover:bg-rose-100 hover:text-rose-900 dark:border-rose-800 dark:bg-rose-950 dark:hover:bg-rose-800 dark:hover:text-rose-50",
        secondary:
          "bg-rose-100 text-rose-900 shadow-sm hover:bg-rose-100/80 dark:bg-rose-800 dark:text-rose-50 dark:hover:bg-rose-800/80",
        ghost:
          "hover:bg-rose-100 hover:text-rose-900 dark:hover:bg-rose-800 dark:hover:text-rose-50",
        link: "text-rose-900 underline-offset-4 hover:underline dark:text-rose-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
