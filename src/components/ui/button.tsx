import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React from "react";

import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:hover:bg-orange-800 dark:hover:text-orange-100 disabled:opacity-50 dark:focus:ring-orange-400 disabled:pointer-events-none dark:focus:ring-offset-orange-700 data-[state=open]:bg-orange-100 dark:data-[state=open]:bg-orange-800",
  {
    variants: {
      variant: {
        default:
          "bg-orange-700 text-white hover:bg-orange-500 dark:bg-orange-50 dark:text-orange-700",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        destructiveOutline:
          "bg-transparent border border-orange-200  hover:bg-red-50 dark:border-orange-500 dark:text-orange-100 border-red-600 text-red-500 hover:bg-red-50  ",
        outline:
          "bg-transparent border border-orange-200 hover:bg-orange-100 dark:border-orange-500 dark:text-orange-100",
        subtle:
          "bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-500 dark:text-orange-100",
        ghost:
          "bg-transparent hover:bg-orange-100 dark:hover:bg-orange-800 dark:text-orange-100 dark:hover:text-orange-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-orange-700 dark:text-orange-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-xl",
        lg: "h-11 px-8 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
  LeftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      loadingText,
      LeftIcon,
      RightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin text-inherit" 
              data-testid="loader"
          />
        )}
        {LeftIcon && !isLoading && (
          <LeftIcon className="mr-2 h-5 w-5  text-inherit" />
        )}
        {isLoading && loadingText ? loadingText : children}
        {RightIcon && <RightIcon className="mr-2 h-4 w-4  text-inherit" />}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
