function HomeMobile({onNav}){
  const {TopBar,Footer,MetricCard,Card,Button}=window.DesignSystemSEMBRA_f9fdf7;
  const nav=[{key:'home',label:'Inicio'},{key:'lic',label:'Licencias'},{key:'ht',label:'Movimientos de HT'},{key:'compras',label:'Mis compras'},{key:'pph',label:'Precertificación'},{key:'cg',label:'Cuenta granaria'},{key:'ces',label:'Cesiones'}];
  return (<div style={{background:'#EEF1F7',minHeight:'100%'}}>
    <TopBar mobile company="LIAG ARGENTINA S.A.U." user="IGNACIO VIDAL" items={nav} active="home" onNav={onNav}/>
    <div style={{position:'relative',height:220,background:'linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.55)),url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800) center/cover',color:'#fff',padding:'32px 20px',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
      <h1 style={{color:'#fff',fontSize:26,lineHeight:1.15,margin:0}}>Sembrá Evolución,<br/>donde tenés que estar.</h1>
    </div>
    <div style={{padding:'16px 16px 24px',display:'flex',flexDirection:'column',gap:12}}>
      <MetricCard title="CEBADA" value="0" cta="Adherite a PPH" onCta={()=>onNav&&onNav('pph')}/>
      <MetricCard title="TRIGO" value="268" cta="Adherite a PPH" onCta={()=>onNav&&onNav('pph')}/>
      <MetricCard title="SOJA" value="0" cta="Compra HT" onCta={()=>onNav&&onNav('compras')}/>
    </div>
    <Footer/>
  </div>);
}
window.HomeMobile=HomeMobile;