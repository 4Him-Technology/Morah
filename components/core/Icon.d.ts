import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name in kebab-case, e.g. "building-2" */
  name: string;
  /** px box. @default 16 */
  size?: number;
  /** @default 2 */
  strokeWidth?: number;
  /** CSS color. @default "currentColor" */
  color?: string;
}

/** React-safe Lucide icon (never use lucide.createIcons() in React trees). */
export function Icon(props: IconProps): JSX.Element;
