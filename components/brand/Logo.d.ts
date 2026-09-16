import * as React from 'react';
/**
 * Sembrá Evolución logo — served from `assets/logo/*.svg` (SVGs reconstructed to match BRANDBOOK-SE.pdf).
 * `basePath` should point to the project root from the consuming HTML (default '.' works when the page sits at root).
 * Variants map to the brandbook's authorised versions: full · negativa · monocromo · monocromoBlanco · vertical · favicon.
 */
export interface LogoProps{
  variant?: 'full'|'negativa'|'monocromo'|'monocromoBlanco'|'vertical'|'favicon';
  height?: number;
  basePath?: string;
}
export declare function Logo(p: LogoProps): JSX.Element;
