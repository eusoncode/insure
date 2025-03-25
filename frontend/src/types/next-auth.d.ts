import { ReactNode } from "react";

// Props for the LayoutProps component
export interface LayoutProps {
  children: ReactNode;
}

// Props for links
export interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
};