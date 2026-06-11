import * as React from 'react';

export interface ResultBandProps {
  /** Explicit band; overrides score */
  level?: 'critico' | 'atencao' | 'adequado' | null;
  /** Average score 1–5; auto-maps to a band */
  score?: number | null;
  /** Append the numeric range, e.g. (2.6 – 3.9) */
  showRange?: boolean;
  style?: React.CSSProperties;
}

/** NR1 psychosocial result band: Crítico / Atenção / Adequado. */
export function ResultBand(props: ResultBandProps): JSX.Element;
