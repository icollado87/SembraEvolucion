import React from 'react';
export function Button({variant='primary',size='md',iconLeft,iconRight,fullWidth,disabled,children,onClick,type='button',...rest}){
  const base={fontFamily:'var(--font-body)',fontWeight:700,borderRadius:'var(--radius-pill)',border:'2px solid transparent',cursor:disabled?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',transition:'background .15s,color .15s,border-color .15s,transform .05s',width:fullWidth?'100%':'auto',minHeight:'var(--touch-target)',opacity:disabled?0.5:1,letterSpacing:'.01em',lineHeight:1,textDecoration:'none'};
  const sizes={sm:{padding:'8px 16px',fontSize:'14px',minHeight:'36px'},md:{padding:'12px 24px',fontSize:'15px'},lg:{padding:'16px 32px',fontSize:'17px'}};
  const variants={
    primary:{background:'var(--se-lime)',color:'var(--se-black)',borderColor:'var(--se-lime)'},
    secondary:{background:'transparent',color:'var(--se-black)',borderColor:'var(--se-black)'},
    ghost:{background:'transparent',color:'var(--se-black)',borderColor:'transparent'},
    dark:{background:'var(--se-black)',color:'var(--se-lime)',borderColor:'var(--se-lime)'},
    danger:{background:'var(--se-danger)',color:'#fff',borderColor:'var(--se-danger)'}
  };
  return React.createElement('button',{type,disabled,onClick,style:{...base,...sizes[size],...variants[variant]},...rest},iconLeft,children,iconRight);
}