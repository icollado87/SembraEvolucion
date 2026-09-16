import React from 'react';
export function Select({label,hint,error,children,id,...rest}){
  const inputId=id||('sel-'+Math.random().toString(36).slice(2,7));
  return React.createElement('label',{htmlFor:inputId,style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',fontSize:14}},
    label&&React.createElement('span',{style:{fontWeight:500}},label),
    React.createElement('select',{id:inputId,style:{width:'100%',minHeight:44,padding:'10px 12px',borderRadius:'var(--radius-md)',border:'1.5px solid '+(error?'var(--se-danger)':'var(--border-default)'),fontSize:15,background:'var(--bg-surface)',fontFamily:'var(--font-body)',color:'var(--text-primary)',appearance:'none',backgroundImage:'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231C1C1C%27 stroke-width=%272.5%27><polyline points=%276 9 12 15 18 9%27/></svg>")',backgroundRepeat:'no-repeat',backgroundPosition:'right 14px center',paddingRight:36},...rest},children),
    (hint||error)&&React.createElement('span',{style:{fontSize:12,color:error?'var(--se-danger)':'var(--text-subtle)'}},error||hint)
  );
}