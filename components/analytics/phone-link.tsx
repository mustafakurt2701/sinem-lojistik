"use client";

import * as React from "react";

import { reportPhoneConversion } from "@/lib/phone-conversion";

type PhoneLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `tel:${string}`;
};

export function PhoneLink({ href, onClick, ...props }: PhoneLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
    reportPhoneConversion(href);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
