function CompraHT({onNav}){
  const {TopBar,Footer,Breadcrumb,Stepper,CropSelector,Button,Card}=window.DesignSystemSEMBRA_f9fdf7;
  const [crop,setCrop]=React.useState('cebada');
  const [tech,setTech]=React.useState('E3');
  const [marca,setMarca]=React.useState('');
  const [step,setStep]=React.useState(1);
  const techOptions=[{id:'E3',label:'E3 CEBADA',desc:'Incluye todas las variedades de cebada con tecnología Enlist.'},{id:'CL',label:'CL CEBADA',desc:'Clearfield — variedades tolerantes a imidazolinonas.'}];
  const nav=[{key:'home',label:'Inicio'},{key:'lic',label:'Licencias'},{key:'ht',label:'Movimientos de HT'},{key:'compras',label:'Mis compras'},{key:'pph',label:'Precertificación'},{key:'cg',label:'Cuenta granaria'},{key:'ces',label:'Cesiones'}];
  const steps=[
    {title:'Seleccionar cultivo',summary:crop.charAt(0).toUpperCase()+crop.slice(1),content:<div style={{marginTop:12}}><CropSelector value={crop} onChange={v=>{setCrop(v);setStep(1)}}/><div style={{marginTop:16,display:'flex',justifyContent:'flex-end'}}><Button variant="primary" onClick={()=>setStep(1)}>Continuar</Button></div></div>},
    {title:'Seleccionar tecnología',summary:tech,content:<div style={{marginTop:12,display:'flex',flexDirection:'column',gap:10}}>{techOptions.map(o=><button key={o.id} onClick={()=>setTech(o.id)} style={{textAlign:'left',padding:16,border:'2px solid '+(tech===o.id?'#BFFF00':'#4A5261'),background:tech===o.id?'#2E2E2E':'transparent',borderRadius:12,color:'#fff',cursor:'pointer'}}><div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:18,color:tech===o.id?'#BFFF00':'#fff'}}>{o.label}</div><div style={{fontSize:13,color:'#DDE2EB',marginTop:4}}>{o.desc}</div></button>)}<div style={{display:'flex',justifyContent:'space-between',marginTop:8}}><Button variant="ghost" style={{color:'#fff'}} onClick={()=>setStep(0)}>Volver</Button><Button variant="primary" onClick={()=>setStep(2)}>Continuar</Button></div></div>},
    {title:'Seleccionar marca'},
    {title:'Confirmar compra'}
  ];
  return (<div style={{background:'#fff',minHeight:'100%'}}>
    <TopBar mobile items={nav} active="compras" onNav={onNav}/>
    <div style={{padding:'20px 16px 24px',display:'flex',flexDirection:'column',gap:16}}>
      <Breadcrumb items={[{label:'Portal',href:'#'},{label:'Compra HT'}]}/>
      <h1 style={{fontSize:28,margin:0}}>Compra de HT</h1>
      <Stepper steps={steps} activeIndex={step} onStepClick={i=>i<=step&&setStep(i)}/>
    </div>
    <Footer/>
  </div>);
}
window.CompraHT=CompraHT;