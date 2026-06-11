import * as React from 'react';

export interface StatCardProps {
  label: string;
  value: string | number;
  /** Lucide watermark icon name. @default "bar-chart-3" */
  icon?: string;
  /** @default "berry" */
  tone?: 'berry' | 'blue' | 'green' | 'amber';
  /** Sparkline series */
  data?: number[];
  style?: React.CSSProperties;
}

/**
 * Dashboard KPI tile with sparkline.
 * @startingPoint section="Data" subtitle="Tinted KPI tile with sparkline" viewport="700x170"
 */
export function StatCard(props: StatCardProps): JSX.Element;
