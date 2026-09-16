import React from 'react';

// Named icons that map to the 8 domain icons defined in BRANDBOOK-SE.pdf (página 7).
// Each SVG lives at `assets/icons/<name>.svg`.
export const ICON_NAMES = [
  'licencia',
  'hectarea-tecnologica',
  'semillas-certificadas',
  'compra-ht',
  'genetica',
  'biotecnologia',
  'entrega-semillas',
  'precertificacion-pph'
];

export function Icon({name, size=48, basePath='.', title, style, ...rest}){
  const src = basePath.replace(/\/$/,'') + '/assets/icons/' + name + '.svg';
  return React.createElement('img',{src,alt:title||name,width:size,height:size,style:{display:'inline-block',verticalAlign:'middle',...style},...rest});
}
