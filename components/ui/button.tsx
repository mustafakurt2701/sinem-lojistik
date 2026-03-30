"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { reportPhoneConversion } from "@/lib/phone-conversion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/92",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline:
          "border border-border bg-white text-foreground hover:border-primary hover:text-primary",
        ghost: "text-foreground hover:bg-secondary"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 px-6 text-sm",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

type ButtonLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  VariantProps<typeof buttonVariants> & {
    href: LinkProps["href"];
    children: React.ReactNode;
  };

export function ButtonLink({
  className,
  variant,
  size,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (typeof href === "string" && /^(https?:|tel:|mailto:)/.test(href)) {
    const isPhoneLink = href.startsWith("tel:");

    return (
      <a
        className={classes}
        href={href}
        onClick={(event) => {
          props.onClick?.(event);

          if (event.defaultPrevented || !isPhoneLink) {
            return;
          }

          event.preventDefault();
          reportPhoneConversion(href as `tel:${string}`);
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}

export { buttonVariants };
