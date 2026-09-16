import React from 'react';
export function Stepper({steps=[],activeIndex=0,onStepClick}){
  return React.createElement('ol',{style:{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12}},
    steps.map((s,i)=>{
      const state=i<activeIndex?'complete':(i===activeIndex?'active':'idle');
      const isActive=state==='active';
      const isComplete=state==='complete';
      const bg=isActive?'var(--se-black)':(isComplete?'var(--se-gray-100)':'var(--bg-surface)');
      const color=isActive?'#fff':'var(--text-primary)';
      const border=isActive?'var(--se-black)':(isComplete?'var(--se-gray-100)':'var(--border-default)');
      return React.createElement('li',{key:i,onClick:()=>onStepClick&&onStepClick(i),style:{background:bg,color,border:'2px solid '+border,borderRadius:'var(--radius-lg)',padding:'16px 20px',cursor:onStepClick?'pointer':'default',display:'flex',gap:16,alignItems:isActive?'flex-start':'center'}},
        React.createElement('span',{style:{minWidth:36,height:36,borderRadius:'999px',border:'2px solid var(--se-lime)',color:isActive?'var(--se-lime)':(isComplete?'var(--se-black)':'var(--text-muted)'),background:isComplete?'var(--se-lime)':'transparent',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700,fontSize:16}},isComplete?'✓':(i+1)),
        React.createElement('div',{style:{flex:1}},
          React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:700,fontSize:isActive?20:16,lineHeight:1.3}},s.title),
          isActive&&s.content&&React.createElement('div',{style:{marginTop:16}},s.content),
          isComplete&&s.summary&&React.createElement('div',{style:{marginTop:4,fontSize:13,color:'var(--text-muted)'}},s.summary)
        )
      );
    })
  );
}