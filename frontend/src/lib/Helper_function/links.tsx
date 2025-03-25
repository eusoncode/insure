import React from "react";
import {CustomLinkProps} from "@/types/next-auth"

export default function CustomLink({ href, children, className }: CustomLinkProps) {
  return (
    <a href={href} className={className || ""}>
      {children}
    </a>
  );
};
