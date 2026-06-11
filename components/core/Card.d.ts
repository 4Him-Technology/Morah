import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  /** Lift + deepen shadow on hover. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Base white surface card. */
export function Card(props: CardProps): JSX.Element;
