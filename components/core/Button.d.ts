import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'danger' | 'leaf';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label */
  iconLeft?: string | null;
  /** Lucide icon name rendered after the label */
  iconRight?: string | null;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/**
 * Morah action button.
 * @startingPoint section="Core" subtitle="Berry-gradient button with 6 variants" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
