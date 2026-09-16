function CuentaGranaria({onNav}){
  const {TopBar,Footer,Breadcrumb,CropSelector,Select,DataTable,Card}=window.DesignSystemSEMBRA_f9fdf7;
  const [crop,setCrop]=React.useState('cebada');
  const nav=[{key:'home',label:'Inicio'},{key:'lic',label:'Licencias'},{key:'ht',label:'Movimientos de HT'},{key:'compras',label:'Mis compras'},{key:'pph',label:'Precertificación'},{key:'cg',label:'Cuenta granaria'},{key:'ces',label:'Cesiones'}];
  return (<div style={{background:'#fff',minHeight:'100%'}}>
    <TopBar mobile items={nav} active="cg" onNav={onNav}/>
    <div style={{padding:'20px 16px 24px',display:'flex',flexDirection:'column',gap:20}}>
      <Breadcrumb items={[{label:'Portal',href:'#'},{label:'Cuenta granaria'}]}/>
      <h1 style={{margin:0,fontSize:28}}>Cuenta granaria</h1>
      <div><div style={{fontSize:13,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'.06em',fontWeight:700,marginBottom:8}}>Cultivo</div><CropSelector value={crop} onChange={setCrop}/></div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        <Select label="Campaña"><option>2025/26</option><option>2024/25</option></Select>
        <Select label="Plataforma"><option>Corredor</option><option>Acopio</option></Select>
      </div>
      <DataTable columns={[{key:'fecha',label:'Fecha'},{key:'concepto',label:'Concepto'},{key:'kg',label:'Kilos'}]} rows={[]} empty={'Todavía no registrás movimientos para '+crop+'.'}/>
    </div>
    <Footer/>
  </div>);
}
window.CuentaGranaria=CuentaGranaria;