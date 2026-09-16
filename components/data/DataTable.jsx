import React from 'react';
export function DataTable({columns=[],rows=[],empty='No hay datos para mostrar'}){
  if(!rows.length)return React.createElement('div',{style:{padding:'48px 16px',textAlign:'center',color:'var(--text-muted)',border:'1px dashed var(--border-default)',borderRadius:'var(--radius-lg)',background:'var(--bg-muted)'}},empty);
  return React.createElement('div',{style:{overflowX:'auto',border:'1px solid var(--border-default)',borderRadius:'var(--radius-lg)'}},
    React.createElement('table',{style:{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-body)',fontSize:14}},
      React.createElement('thead',null,React.createElement('tr',null,columns.map((c,i)=>React.createElement('th',{key:i,style:{background:'var(--se-gray-100)',color:'var(--text-primary)',textAlign:'left',padding:'12px 16px',fontWeight:700,fontSize:12,letterSpacing:'.06em',textTransform:'uppercase',borderBottom:'1px solid var(--border-default)'}},c.label)))),
      React.createElement('tbody',null,rows.map((r,ri)=>React.createElement('tr',{key:ri,style:{borderBottom:'1px solid var(--border-default)'}},columns.map((c,ci)=>React.createElement('td',{key:ci,style:{padding:'14px 16px',color:c.link?'var(--se-black)':'var(--text-primary)',textDecoration:c.link?'underline':'none',fontWeight:c.link?600:400}},typeof c.render==='function'?c.render(r):r[c.key])))))
    )
  );
}