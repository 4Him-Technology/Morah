import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  src?: string | null;
  /** px diameter. @default 40 */
  size?: number;
  /** @default "berry" */
  tone?: 'berry' | 'leaf' | 'dark';
}

/** Circular avatar with initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
