import React from 'react';
export function Badge({tone='success',children,style,...rest}){
  const tones={
    success:{background:'var(--se-success)',color:'var(--se-success-fg)'},
    warning:{background:'var(--se-warning)',color:'var(--se-warning-fg)'},
    danger:{background:'var(--se-danger)',color:'var(--se-danger-fg)'},
    neutral:{background:'var(--se-neutral)',color:'var(--se-neutral-fg)'},
    muted:{background:'var(--se-gray-100)',color:'var(--se-black)'}
  };
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-body)',fontSize:12,fontWeight:700,letterSpacing:'.02em',lineHeight:1.4,...tones[tone],...style},...rest},children);
}