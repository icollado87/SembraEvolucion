import React from 'react';
export function Footer({phone='011 5077-9090',email='info@sembraevolucion.com.ar',onContact}){
  return React.createElement('footer',{style:{background:'var(--se-black)',color:'#fff',padding:'20px 24px',display:'flex',flexWrap:'wrap',gap:16,alignItems:'center',justifyContent:'space-between'}},
    React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontSize:14}},
      React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:10}},
        React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'var(--se-lime)'},React.createElement('path',{d:'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2L8 10.1a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z'})),
        phone
      ),
      React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:10}},
        React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'var(--se-lime)',strokeWidth:2},React.createElement('path',{d:'M4 4h16v16H4z'}),React.createElement('path',{d:'M22 6l-10 7L2 6'})),
        email
      )
    ),
    React.createElement('button',{onClick:onContact,style:{background:'var(--se-lime)',color:'var(--se-black)',border:'none',borderRadius:'var(--radius-pill)',padding:'12px 24px',fontWeight:700,fontFamily:'var(--font-body)',fontSize:14,cursor:'pointer',display:'inline-flex',alignItems:'center',gap:10}},
      React.createElement('svg',{width:18,height:18,viewBox:'0 0 24 24',fill:'currentColor'},React.createElement('path',{d:'M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2z'})),
      'Contáctenos'
    )
  );
}