import * as React from 'react';
/**
 * Domain icon from the Sembrá Evolución brandbook (línea dentro de círculo, borde verde lima).
 * Names match `assets/icons/<name>.svg`: licencia, hectarea-tecnologica, semillas-certificadas,
 * compra-ht, genetica, biotecnologia, entrega-semillas, precertificacion-pph.
 * @startingPoint section="Brand" subtitle="Domain icons (8-icon brand set)" viewport="700x180"
 */
export interface IconProps{
  name:
    | 'licencia'
    | 'hectarea-tecnologica'
    | 'semillas-certificadas'
    | 'compra-ht'
    | 'genetica'
    | 'biotecnologia'
    | 'entrega-semillas'
    | 'precertificacion-pph';
  size?: number;
  basePath?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Icon(p: IconProps): JSX.Element;
export declare const ICON_NAMES: string[];
