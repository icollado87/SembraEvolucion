function Licencias({onNav}){
  const {TopBar,Footer,Breadcrumb,DataTable,FilterPill,Badge,Input,Button}=window.DesignSystemSEMBRA_f9fdf7;
  const nav=[{key:'home',label:'Inicio'},{key:'lic',label:'Licencias'},{key:'ht',label:'Movimientos de HT'},{key:'compras',label:'Mis compras'},{key:'pph',label:'Precertificación'},{key:'cg',label:'Cuenta granaria'},{key:'ces',label:'Cesiones'}];
  const cols=[{key:'id',label:'Código',link:true},{key:'cultivo',label:'Cultivo'},{key:'variedad',label:'Variedad'},{key:'ht',label:'HT'},{key:'estado',label:'Estado',render:r=>{const m={Aprobada:'success',Pagada:'success',Vencida:'warning',Cancelada:'danger',Pendiente:'warning'};return <Badge tone={m[r.estado]||'neutral'}>{r.estado}</Badge>}}];
  const rows=[{id:'LC-00812',cultivo:'Cebada',variedad:'E3 CB-12',ht:'120',estado:'Aprobada'},{id:'LC-00813',cultivo:'Trigo',variedad:'CL TR-04',ht:'268',estado:'Pagada'},{id:'LC-00814',cultivo:'Soja',variedad:'RR2 SJ-08',ht:'54',estado:'Vencida'},{id:'LC-00815',cultivo:'Cebada',variedad:'E3 CB-14',ht:'92',estado:'Pendiente'},{id:'LC-00816',cultivo:'Trigo',variedad:'—',ht:'12',estado:'Cancelada'}];
  return (<div style={{background:'#fff',minHeight:'100%'}}>
    <TopBar mobile items={nav} active="lic" onNav={onNav}/>
    <div style={{padding:'20px 16px 24px',display:'flex',flexDirection:'column',gap:16}}>
      <Breadcrumb items={[{label:'Portal',href:'#'},{label:'Licencias'}]}/>
      <h1 style={{margin:0,fontSize:28}}>Licencias</h1>
      <Input placeholder="Buscar por código o variedad" leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>}/>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}><FilterPill label="Cultivo" value="Todos"/><FilterPill label="Estado" value="Aprobada" active/><FilterPill label="Campaña" value="2025/26"/></div>
      <DataTable columns={cols} rows={rows}/>
    </div>
    <Footer/>
  </div>);
}
window.Licencias=Licencias;