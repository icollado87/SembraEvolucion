import React from 'react';
import {Logo} from '../brand/Logo.jsx';

const CHEV = 'M6 9l6 6 6-6';

export function TopBar({company,user,items=[],active,onNav,onLogout,onMenu,mobile,basePath='../..'}){
  const [openMenu,setOpenMenu]=React.useState(null);
  const [userOpen,setUserOpen]=React.useState(false);
  const closeAll = ()=>{setOpenMenu(null);setUserOpen(false)};
  React.useEffect(()=>{const h=()=>closeAll();window.addEventListener('click',h);return()=>window.removeEventListener('click',h)},[]);

  if(mobile){
    return React.createElement('header',{style:{background:'var(--se-black)',color:'#fff',padding:'0 12px 0 16px',display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:56,position:'sticky',top:0,zIndex:30}},
      React.createElement(Logo,{variant:'negativa',height:30,basePath}),
      React.createElement('button',{onClick:onMenu,'aria-label':'Abrir menú','style':{width:44,height:44,minWidth:44,borderRadius:'999px',background:'transparent',border:'1.5px solid #fff',color:'#fff',cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center'}},
        React.createElement('svg',{width:22,height:22,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round'},React.createElement('path',{d:'M3 6h18M3 12h18M3 18h18'}))
      )
    );
  }

  return React.createElement('header',{onClick:e=>e.stopPropagation()},
    // white strip: company + user dropdown + logout
    React.createElement('div',{style:{background:'#fff',padding:'8px 24px',display:'flex',justifyContent:'flex-end',alignItems:'center',gap:20,fontSize:13,borderBottom:'1px solid var(--border-default)'}},
      company&&React.createElement('span',{style:{fontWeight:700,letterSpacing:'.04em',color:'var(--text-muted)'}},company),
      React.createElement('div',{style:{position:'relative'}},
        React.createElement('button',{onClick:()=>setUserOpen(o=>!o),style:{background:'transparent',border:'none',cursor:'pointer',fontFamily:'var(--font-body)',fontWeight:700,fontSize:13,letterSpacing:'.04em',color:'var(--se-black)',minHeight:36,padding:'0 8px',display:'inline-flex',alignItems:'center',gap:6}},
          user||'USUARIO',
          React.createElement('svg',{width:12,height:12,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.5,style:{transform:userOpen?'rotate(180deg)':'none',transition:'transform .15s'}},React.createElement('path',{d:CHEV}))
        ),
        userOpen&&React.createElement('div',{style:{position:'absolute',top:'100%',right:0,marginTop:6,background:'#fff',border:'1px solid var(--border-default)',borderRadius:12,boxShadow:'var(--shadow-modal)',minWidth:200,padding:6,zIndex:20}},
          ['Perfil','Empresas','Notificaciones','Ayuda'].map(l=>React.createElement('button',{key:l,onClick:()=>{setUserOpen(false);onNav&&onNav('perfil-'+l.toLowerCase())},style:{display:'block',width:'100%',textAlign:'left',padding:'10px 12px',background:'transparent',border:'none',cursor:'pointer',borderRadius:8,fontFamily:'var(--font-body)',fontSize:14,color:'var(--text-primary)',minHeight:40}},l))
        )
      ),
      React.createElement('button',{onClick:onLogout,'aria-label':'Salir',style:{width:36,height:36,minWidth:36,borderRadius:'999px',border:'1.5px solid var(--se-black)',background:'transparent',cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center'}},
        React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},React.createElement('path',{d:'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3'}))
      )
    ),
    // black bar with primary items
    React.createElement('div',{style:{background:'var(--se-black)',color:'#fff',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:72,position:'relative'}},
      React.createElement(Logo,{variant:'negativa',height:36,basePath}),
      React.createElement('nav',{style:{display:'flex',gap:2,alignItems:'stretch',height:72}},items.map(it=>{
        const isActive=active===it.key||(it.children&&it.children.some(c=>c.key===active));
        const hasChildren=!!it.children;
        return React.createElement('div',{key:it.key,style:{position:'relative',display:'flex'}},
          React.createElement('button',{onClick:e=>{e.stopPropagation();hasChildren?setOpenMenu(openMenu===it.key?null:it.key):onNav&&onNav(it.key)},style:{background:'transparent',border:'none',color:isActive?'var(--se-lime)':'#fff',fontFamily:'var(--font-body)',fontWeight:700,fontSize:13,letterSpacing:'.04em',textTransform:'uppercase',padding:'0 14px',minHeight:44,cursor:'pointer',borderBottom:isActive?'3px solid var(--se-lime)':'3px solid transparent',display:'inline-flex',alignItems:'center',gap:6}},
            it.label,
            hasChildren&&React.createElement('svg',{width:12,height:12,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.5},React.createElement('path',{d:CHEV}))
          ),
          hasChildren&&openMenu===it.key&&React.createElement('div',{style:{position:'absolute',top:'100%',right:0,background:'#fff',color:'var(--se-black)',border:'1px solid var(--border-default)',borderTop:'3px solid var(--se-lime)',borderRadius:'0 0 12px 12px',minWidth:240,boxShadow:'var(--shadow-modal)',padding:6,zIndex:20}},it.children.map(c=>React.createElement('button',{key:c.key,onClick:()=>{setOpenMenu(null);onNav&&onNav(c.key)},style:{display:'block',width:'100%',textAlign:'left',padding:'12px 14px',background:'transparent',border:'none',cursor:'pointer',borderRadius:8,fontFamily:'var(--font-body)',fontSize:14,fontWeight:active===c.key?700:500,color:'var(--se-black)',minHeight:44}},c.label)))
        );
      }))
    )
  );
}
