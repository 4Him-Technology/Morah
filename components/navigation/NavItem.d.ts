import * as React from 'react';

export interface NavItemProps {
  /** Lucide icon name */
  icon: string;
  label: string;
  active?: boolean;
  /** Notification dot on the right */
  dot?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** Sidebar nav row (use on the dark berry sidebar). */
export function NavItem(props: NavItemProps): JSX.Element;
