import React from 'react';
export function Breadcrumb({items=[]}){
  return React.createElement('nav',{'aria-label':'breadcrumb',style:{display:'flex',flexWrap:'wrap',gap:6,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--text-muted)',fontWeight:600}},
    items.map((it,i)=>React.createElement(React.Fragment,{key:i},
      i>0&&React.createElement('span',{style:{color:'var(--text-subtle)'}},'/'),
      it.href?React.createElement('a',{href:it.href,style:{color:'var(--text-muted)'}},it.label):React.createElement('span',{style:{color:'var(--text-primary)'}},it.label)
    ))
  );
}