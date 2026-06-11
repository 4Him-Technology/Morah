import * as React from 'react';

export interface TabsProps {
  tabs?: string[];
  active?: number;
  onChange?: (index: number) => void;
  style?: React.CSSProperties;
}

/** Segmented pill tab bar. */
export function Tabs(props: TabsProps): JSX.Element;
