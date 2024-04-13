import Button from "./Button"
import styles from "./ProjectContent.module.css"
import lampada from '../Components/img/lampada.svg';
import ccxp from '../Components/img/ccxp.svg';
import dncweather from '../Components/img/dncweather.svg';
import tabuada from '../Components/img/tabuada.svg';

function ProjectContent() {
  
    return (
      <main id='Projetos'>
        
        <h1 className={styles.h1Projetos}>Projetos</h1>
        <div className={styles.container}>
          <div className={styles.card}>
           <img src={dncweather} className={styles.cardImg} alt="teste"></img>
           <h2>DncWeather</h2>
            <div className={styles.cardbody}>
              <p className={styles.text}>Tecnologias: Figma, HTML, CSS, JAVASCRIPT<br>
              </br><br></br>Projeto Simples utilizando HTML, CSS e JavaScript. Este projeto foi desenvolvido para aprimorar o conhecimento lógico de API. O projeto foi criado de forma independente.</p>
              <Button link={"https://dncweather0004.netlify.app"} text={"Clique aqui"}/>
           </div>
           
          </div>
          <div className={styles.card}>
           <img src={ccxp} className={styles.cardImg} alt="teste"></img>
           <h2>CCXP2024</h2>
            <div className={styles.cardbody}>
              <p className={styles.text}>Tecnologias: Figma, HTML, CSS, JAVASCRIPT<br>
              </br><br></br>Projeto Simples utilizando HTML, CSS e JavaScript. Este projeto foi desenvolvido para aprimorar o conhecimento lógico do curso DNC. O projeto foi criado de forma independente.</p>
           </div>
           <Button link={"https://marvelous-maamoul-2ecc7a.netlify.app"} text={"Clique aqui"}/>
          </div>
          <div className={styles.card}>
           <img src={lampada} className={styles.cardImg} alt="teste"></img>
           <h2>Lampada</h2>
            <div className={styles.cardbody}>
              <p className={styles.text}>Tecnologias: Figma, HTML, CSS, JAVASCRIPT<br>
              </br><br></br>Projeto Simples utilizando HTML, CSS e JavaScript. Este projeto foi desenvolvido para aprimorar o conhecimento lógico do curso DNC. O projeto foi criado de forma independente.</p>
           </div>
           <Button link={"https://extraordinary-palmier-d41448.netlify.app"} text={"Clique aqui"}/>
          </div>
          <div className={styles.card}>
           <img src={tabuada} className={styles.cardImg} alt="teste"></img>
           <h2>Tabuada</h2>
            <div className={styles.cardbody}>
              <p className={styles.text}>Tecnologias: Figma, HTML, CSS, JAVASCRIPT<br>
              </br><br></br>Projeto Simples utilizando HTML, CSS e JavaScript. Este projeto foi desenvolvido para aprimorar o conhecimento lógico do curso DNC. O projeto foi criado de forma independente.</p>
           </div>
           <Button link={"https://tabuada2024.netlify.app"} text={"Clique aqui"}/>
          </div>
        </div>
      </main>
    )
  }
  
  export default ProjectContent