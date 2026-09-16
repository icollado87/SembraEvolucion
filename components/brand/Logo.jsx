import React from 'react';

// Real brand PNGs (uploaded) for the color and dark-bg versions;
// SVG reconstructions for monocromo / vertical / favicon variants.
const SRC = {
  full:            { file: 'assets/logo/logo-full.png',                ratio: 1050/266 },
  negativa:        { file: 'assets/logo/logo-negativo.png',            ratio: 1008/256 },
  monocromo:       { file: 'assets/logo/logo-monocromo.svg',           ratio: 440/120 },
  monocromoBlanco: { file: 'assets/logo/logo-monocromo-blanco.svg',    ratio: 440/120 },
  vertical:        { file: 'assets/logo/logo-vertical.svg',            ratio: 260/220 },
  favicon:         { file: 'assets/logo/favicon.png',                 ratio: 1 }
};

export function Logo({variant='full', height=44, basePath='.', ...rest}){
  const v = SRC[variant] || SRC.full;
  const base = basePath.replace(/\/$/,'');
  const src = base + '/' + v.file;
  const width = height * v.ratio;
  return React.createElement('img',{src,alt:'Sembrá Evolución',height,width,style:{display:'inline-block',verticalAlign:'middle',objectFit:'contain'},...rest});
}
