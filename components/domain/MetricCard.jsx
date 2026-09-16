import React from 'react';
export function MetricCard({title,value,unit='HT Futuras',cta,onCta}){
  return React.createElement('div',{style:{background:'var(--se-black)',color:'#fff',borderRadius:'var(--radius-lg)',padding:'28px 24px',display:'flex',flexDirection:'column',alignItems:'center',gap:16,textAlign:'center',minHeight:280}},
    React.createElement('h3',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:28,letterSpacing:'.06em',color:'#fff',margin:0,textTransform:'uppercase'}},title),
    React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:72,lineHeight:1,color:'var(--se-lime)'}},value),
    React.createElement('div',{style:{fontSize:14,color:'var(--se-lime)',fontWeight:700}},unit),
    cta&&React.createElement('button',{onClick:onCta,style:{marginTop:'auto',background:'var(--se-lime)',color:'var(--se-black)',border:'none',borderRadius:'var(--radius-pill)',padding:'10px 24px',fontWeight:700,fontSize:14,cursor:'pointer',fontFamily:'var(--font-body)'}},cta)
  );
}