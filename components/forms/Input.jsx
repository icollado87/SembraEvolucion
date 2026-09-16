import React from 'react';
export function Input({label,hint,error,leftIcon,rightIcon,id,style,...rest}){
  const inputId=id||('inp-'+Math.random().toString(36).slice(2,7));
  return React.createElement('label',{htmlFor:inputId,style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',fontSize:14,color:'var(--text-primary)'}},
    label&&React.createElement('span',{style:{fontWeight:500}},label),
    React.createElement('span',{style:{position:'relative',display:'flex',alignItems:'center'}},
      leftIcon&&React.createElement('span',{style:{position:'absolute',left:12,color:'var(--text-subtle)',display:'flex'}},leftIcon),
      React.createElement('input',{id:inputId,style:{width:'100%',minHeight:44,padding:leftIcon?'10px 12px 10px 40px':(rightIcon?'10px 40px 10px 12px':'10px 12px'),borderRadius:'var(--radius-md)',border:'1.5px solid '+(error?'var(--se-danger)':'var(--border-default)'),outline:'none',fontSize:15,fontFamily:'var(--font-body)',background:'var(--bg-surface)',color:'var(--text-primary)',...style},onFocus:e=>{if(!error)e.target.style.borderColor='var(--se-lime)';e.target.style.boxShadow='var(--shadow-focus)'},onBlur:e=>{e.target.style.borderColor=error?'var(--se-danger)':'var(--border-default)';e.target.style.boxShadow='none'},...rest}),
      rightIcon&&React.createElement('span',{style:{position:'absolute',right:12,color:'var(--text-subtle)',display:'flex'}},rightIcon)
    ),
    (hint||error)&&React.createElement('span',{style:{fontSize:12,color:error?'var(--se-danger)':'var(--text-subtle)'}},error||hint)
  );
}