import React from 'react';
export function FilterPill({label,value,onClick,active}){
  return React.createElement('button',{type:'button',onClick,style:{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 14px',border:'1.5px solid '+(active?'var(--se-lime)':'var(--se-black)'),borderRadius:'var(--radius-pill)',background:active?'var(--se-lime)':'transparent',color:'var(--se-black)',fontFamily:'var(--font-body)',fontWeight:600,fontSize:13,cursor:'pointer',minHeight:36}},
    React.createElement('span',null,label),
    value&&React.createElement('span',{style:{fontWeight:400,color:'var(--text-muted)'}},value),
    React.createElement('svg',{width:12,height:12,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.5},React.createElement('polyline',{points:'6 9 12 15 18 9'}))
  );
}