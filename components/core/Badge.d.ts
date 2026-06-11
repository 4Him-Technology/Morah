import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: 'neutral' | 'berry' | 'leaf' | 'critical' | 'warning' | 'success' | 'info';
  /** Filled vs soft-tinted. @default false */
  solid?: boolean;
  children?: React.ReactNode;
}

/** Pill label / chip. */
export function Badge(props: BadgeProps): JSX.Element;
