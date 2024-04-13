import styles from "./SectionContent.module.css"

function SectionContent() {
  
  return (
    <section id='Section'>
      <h1>Sobre mim</h1>
      <div  className={styles.containerGeral}>
        <div className={styles.roadmap}>
        <div className={styles.step}></div>          
          <div className={styles.containerCircle}>
            <div className={styles.divContent}>
              <div><h4>2008</h4></div>
              <div className={styles.circle}></div>
              <div className={styles.articleP}><p>
              FAST ACTION LAN HOUSE<br></br>Iniciava o primeiro contato com a area de IT. Minhas Principais Funcoes era manutencao do site e computadaores.</p></div>
            </div>
            <div className={styles.divContent}>
              <div><h4>2012</h4></div>
              <div className={styles.circle}></div>
              <div className={styles.articleP}><p>
              BACELLAR IT<br></br> Apos bom anos de aprendizados na area de IT decidi migrar para esta empresa que tinha seu principios voltados para manutencao de comutadores e criancao de sites. </p></div>
            </div>
            <div className={styles.divContent}>
              <div><h4>2023</h4></div>
              <div className={styles.circle}></div>
              <div className={styles.articleP}><p>
              GR PARCERIA<br></br>Buscando novos conhecimentos decidi ir para esta empresa que tinha como sua principal atividade o rastreamento de caminhoes com itens de alto valores, aprendendo novas tecnologias estava aberto para conhecer mais o mundo tecnologico.</p></div>
            </div>
            <div className={styles.divContent}>
              <div><h4>2024</h4></div>
              <div  className={styles.circle }></div>
              <div className={styles.articleP}><p>
              NOC(OI FIBRA)<br></br>Ja com uma boa experiencia na area de IT e visando um futuro melhor recebi uma boa oportunidade de trabalhar para esta empresa, que tinha como principal funcao analise de erros em servidores linux e windows XP de grandes empresas nacionais e internacionais. Era tambem responsavel pelo backup desses servidores como os erros mais graves tendo que ser reportado para o Senior Oracle.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  export default SectionContent