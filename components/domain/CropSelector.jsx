import React from 'react';
const crops={
  cebada:{label:'Cebada'},
  soja:{label:'Soja'},
  trigo:{label:'Trigo'},
  maiz:{label:'Maíz'}
};
function CropIcon({crop,active}){
  const c=active?'var(--se-lime)':'var(--text-primary)';
  const common={width:44,height:44,fill:'none',stroke:c,strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round'};
  if(crop==='soja')return React.createElement('svg',{viewBox:'0 0 44 44',...common},React.createElement('path',{d:'M8 30c6-2 10-6 12-14M22 16c2 8 6 12 14 14'}),React.createElement('circle',{cx:14,cy:26,r:3.5}),React.createElement('circle',{cx:22,cy:22,r:3.5}),React.createElement('circle',{cx:30,cy:26,r:3.5}));
  if(crop==='trigo')return React.createElement('svg',{viewBox:'0 0 44 44',...common},React.createElement('path',{d:'M22 8v28'}),React.createElement('path',{d:'M22 14c-4 0-6 2-6 5M22 14c4 0 6 2 6 5M22 20c-4 0-6 2-6 5M22 20c4 0 6 2 6 5M22 26c-4 0-6 2-6 5M22 26c4 0 6 2 6 5'}));
  // cebada / default: barley
  return React.createElement('svg',{viewBox:'0 0 44 44',...common},React.createElement('path',{d:'M22 36V10'}),React.createElement('path',{d:'M22 12l-5-3M22 18l-6-3M22 24l-6-3M22 30l-6-3M22 12l5-3M22 18l6-3M22 24l6-3M22 30l6-3'}));
}
export function CropSelector({value,onChange,options=['cebada','soja','trigo']}){
  return React.createElement('div',{style:{display:'flex',gap:16,flexWrap:'wrap'}},
    options.map(k=>{
      const active=value===k;
      return React.createElement('button',{key:k,type:'button',onClick:()=>onChange&&onChange(k),style:{flex:'1 1 96px',minWidth:96,padding:'20px 12px 14px',background:'var(--bg-surface)',border:'2px solid '+(active?'var(--se-lime)':'var(--border-default)'),borderRadius:'var(--radius-lg)',display:'flex',flexDirection:'column',alignItems:'center',gap:8,cursor:'pointer',color:active?'var(--se-lime)':'var(--text-primary)',fontFamily:'var(--font-display)',fontWeight:700,fontSize:14,letterSpacing:'.05em',textTransform:'uppercase'}},
        React.createElement(CropIcon,{crop:k,active}),
        (crops[k]||{label:k}).label
      );
    })
  );
}