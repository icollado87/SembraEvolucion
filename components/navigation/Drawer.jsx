import React from 'react';

const CHEV = 'M6 9l6 6 6-6';
const X = 'M6 6l12 12M18 6L6 18';

export function Drawer({open, onClose, user, active, onNav, sections=[]}){
  const [openKeys, setOpenKeys] = React.useState({});
  if(!open) return null;
  const toggle = (k)=> setOpenKeys(s=>({...s,[k]:!s[k]}));
  return React.createElement('div',{role:'dialog','aria-modal':true,style:{position:'fixed',inset:0,zIndex:60}},
    // scrim
    React.createElement('div',{onClick:onClose,style:{position:'absolute',inset:0,background:'rgba(28,28,28,.55)'}}),
    // panel
    React.createElement('aside',{style:{position:'absolute',top:0,right:0,bottom:0,width:'min(320px, 88vw)',background:'#fff',display:'flex',flexDirection:'column',boxShadow:'-8px 0 24px rgba(28,28,28,.2)',animation:'slidein .18s ease-out'}},
      React.createElement('style',null,'@keyframes slidein{from{transform:translateX(100%)}to{transform:translateX(0)}}'),
      // header (black, user + close)
      React.createElement('header',{style:{background:'var(--se-black)',color:'#fff',padding:'16px 16px',display:'flex',alignItems:'center',gap:12}},
        React.createElement('div',{style:{width:40,height:40,borderRadius:'999px',background:'var(--se-lime)',color:'var(--se-black)',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:800,fontSize:16}},(user?.initials)||'IV'),
        React.createElement('div',{style:{flex:1,minWidth:0}},
          React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:700,fontSize:15,letterSpacing:'.02em',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},user?.name||'IGNACIO VIDAL'),
          React.createElement('div',{style:{fontSize:12,color:'var(--se-lime)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},user?.company||'LIAG ARGENTINA S.A.U.')
        ),
        React.createElement('button',{onClick:onClose,'aria-label':'Cerrar','style':{width:44,height:44,minWidth:44,borderRadius:'999px',background:'transparent',border:'1.5px solid #fff',color:'#fff',cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
          React.createElement('svg',{width:20,height:20,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round'},React.createElement('path',{d:X}))
        )
      ),
      // module list
      React.createElement('nav',{style:{flex:1,overflowY:'auto',padding:'8px 0'}},
        sections.map(sec=>{
          if(sec.children){
            const isOpen = !!openKeys[sec.key];
            return React.createElement('div',{key:sec.key},
              React.createElement('button',{onClick:()=>toggle(sec.key),'aria-expanded':isOpen,style:{width:'100%',minHeight:48,padding:'12px 16px',display:'flex',alignItems:'center',gap:12,background:'transparent',border:'none',cursor:'pointer',color:'var(--text-primary)',fontFamily:'var(--font-body)',fontSize:15,fontWeight:600,textAlign:'left'}},
                React.createElement('span',{style:{flex:1}},sec.label),
                React.createElement('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.2,style:{transition:'transform .15s',transform:isOpen?'rotate(180deg)':'none'}},React.createElement('path',{d:CHEV}))
              ),
              isOpen&&React.createElement('div',{style:{background:'var(--bg-muted)'}},sec.children.map(c=>{
                const isActive=active===c.key;
                return React.createElement('button',{key:c.key,onClick:()=>onNav&&onNav(c.key),style:{width:'100%',minHeight:44,padding:'10px 16px 10px 40px',display:'block',textAlign:'left',background:'transparent',border:'none',cursor:'pointer',color:isActive?'var(--se-black)':'var(--text-muted)',fontFamily:'var(--font-body)',fontSize:14,fontWeight:isActive?700:500,borderLeft:isActive?'3px solid var(--se-lime)':'3px solid transparent'}},c.label);
              }))
            );
          }
          const isActive=active===sec.key;
          return React.createElement('button',{key:sec.key,onClick:()=>onNav&&onNav(sec.key),style:{width:'100%',minHeight:48,padding:'12px 16px',display:'flex',alignItems:'center',gap:12,background:isActive?'var(--bg-muted)':'transparent',border:'none',cursor:'pointer',color:'var(--text-primary)',fontFamily:'var(--font-body)',fontSize:15,fontWeight:isActive?700:600,textAlign:'left',borderLeft:isActive?'3px solid var(--se-lime)':'3px solid transparent'}},sec.label);
        })
      ),
      // footer (logout)
      React.createElement('div',{style:{borderTop:'1px solid var(--border-default)',padding:12}},
        React.createElement('button',{onClick:()=>onNav&&onNav('logout'),style:{width:'100%',minHeight:44,padding:'10px 16px',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:10,background:'transparent',border:'1.5px solid var(--se-black)',borderRadius:'999px',cursor:'pointer',fontFamily:'var(--font-body)',fontWeight:700,fontSize:14,color:'var(--se-black)'}},
          React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2},React.createElement('path',{d:'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3'})),
          'Cerrar sesión'
        )
      )
    )
  );
}
