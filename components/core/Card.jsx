import React from 'react';
export function Card({variant='light',padding=24,children,style,...rest}){
  const variants={
    light:{background:'var(--bg-surface)',color:'var(--text-primary)',border:'1px solid var(--border-default)'},
    dark:{background:'var(--se-black)',color:'var(--text-inverse)',border:'1px solid var(--se-black)'},
    muted:{background:'var(--bg-muted)',color:'var(--text-primary)',border:'1px solid var(--bg-muted)'}
  };
  return React.createElement('div',{style:{borderRadius:'var(--radius-lg)',padding,boxShadow:'var(--shadow-card)',...variants[variant],...style},...rest},children);
}