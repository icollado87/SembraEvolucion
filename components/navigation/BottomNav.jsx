import React from 'react';

const ICONS = {
  home:      'M3 12l9-9 9 9M5 10v10h14V10',
  licencias: 'M6 3h10l4 4v14H6zM14 3v4h4M9 12h6M9 16h6',
  movimientos: 'M4 7h13l-3-3M20 17H7l3 3',
  cuenta:    'M4 6h16v12H4zM4 10h16M8 14h4',
  mas:       'M4 6h16M4 12h16M4 18h16'
};

function NavIcon({d, active}){
  return React.createElement('svg',{width:24,height:24,viewBox:'0 0 24 24',fill:'none',stroke:active?'var(--se-black)':'var(--text-muted)',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true},
    React.createElement('path',{d}));
}

export function BottomNav({active,onNav,onCompra}){
  const items=[
    {key:'home',label:'Inicio',icon:ICONS.home},
    {key:'lic',label:'Licencias',icon:ICONS.licencias},
    {key:'fab'},
    {key:'cg',label:'Granaria',icon:ICONS.cuenta},
    {key:'mas',label:'Más',icon:ICONS.mas}
  ];
  const cell={flex:1,minHeight:56,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:2,background:'transparent',border:'none',cursor:'pointer',padding:'6px 4px',fontFamily:'var(--font-body)'};
  return React.createElement('nav',{style:{position:'sticky',bottom:0,left:0,right:0,display:'flex',alignItems:'flex-end',background:'#fff',borderTop:'1px solid var(--border-default)',boxShadow:'0 -2px 12px rgba(28,28,28,.06)',paddingBottom:'env(safe-area-inset-bottom, 4px)',zIndex:40}},
    items.map(it=>{
      if(it.key==='fab'){
        return React.createElement('div',{key:'fab',style:{flex:'0 0 72px',display:'flex',justifyContent:'center',position:'relative'}},
          React.createElement('button',{'aria-label':'Comprar HT',onClick:onCompra,style:{position:'absolute',top:-26,width:64,height:64,borderRadius:'999px',background:'var(--se-lime)',border:'4px solid #fff',color:'var(--se-black)',cursor:'pointer',display:'inline-flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow:'0 6px 16px rgba(28,28,28,.18)',fontFamily:'var(--font-display)',fontWeight:800,fontSize:11,letterSpacing:'.06em',gap:2}},
            React.createElement('svg',{width:22,height:22,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round',strokeLinejoin:'round'},
              React.createElement('path',{d:'M4 7h3l2.5 11h8L20 10H7'}),React.createElement('circle',{cx:10,cy:20,r:1.5}),React.createElement('circle',{cx:17,cy:20,r:1.5})
            ),
            'HT'
          )
        );
      }
      const isActive=active===it.key;
      return React.createElement('button',{key:it.key,onClick:()=>onNav&&onNav(it.key),style:{...cell,minHeight:64,color:isActive?'var(--se-black)':'var(--text-muted)',borderTop:isActive?'3px solid var(--se-lime)':'3px solid transparent'}},
        React.createElement(NavIcon,{d:it.icon,active:isActive}),
        React.createElement('span',{style:{fontSize:11,fontWeight:isActive?700:500,letterSpacing:'.02em'}},it.label)
      );
    })
  );
}
