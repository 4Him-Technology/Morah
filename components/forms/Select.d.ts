import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: (string | SelectOption)[];
  label?: string | null;
  /** Style for placement on the dark header bar. @default false */
  dark?: boolean;
  wrapStyle?: React.CSSProperties;
}

/** Native select styled to match Morah. */
export function Select(props: SelectProps): JSX.Element;
