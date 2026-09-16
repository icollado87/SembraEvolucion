import React from 'react';
export function Modal({open,onClose,title,children,actions}){
  if(!open)return null;
  return React.createElement('div',{style:{position:'fixed',inset:0,background:'rgba(28,28,28,.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:16,zIndex:1000},onClick:onClose},
    React.createElement('div',{onClick:e=>e.stopPropagation(),style:{background:'#fff',borderRadius:'var(--radius-lg)',width:'100%',maxWidth:480,boxShadow:'var(--shadow-modal)',overflow:'hidden'}},
      title&&React.createElement('div',{style:{background:'var(--se-black)',color:'var(--se-lime)',padding:'20px 24px',fontFamily:'var(--font-display)',fontWeight:700,fontSize:20}},title),
      React.createElement('div',{style:{padding:24,fontFamily:'var(--font-body)',fontSize:15,lineHeight:1.5,color:'var(--text-primary)'}},children),
      actions&&React.createElement('div',{style:{padding:'0 24px 20px',display:'flex',justifyContent:'flex-end',gap:12}},actions)
    )
  );
}