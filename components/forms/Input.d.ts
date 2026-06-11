import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide icon name shown inside the field, leading edge */
  icon?: string | null;
  label?: string | null;
  hint?: string | null;
  wrapStyle?: React.CSSProperties;
}

/** Labeled text input with focus ring + optional icon. */
export function Input(props: InputProps): JSX.Element;
