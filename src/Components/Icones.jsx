import { FaGithub, FaLinkedin,FaFigma } from "react-icons/fa";
import styles from '../Components/Icones.module.css'

function Icones() {
  
    return (
      <div className={styles.Icones}>
            <a href='https://github.com/eduardosegundoit' target="_blank"><FaGithub /></a>
            <a href='https://www.linkedin.com/in/carlos-eduardo-segundo-dos-santos-726b182ba/' target="_blank"><FaLinkedin /></a>
            <a href='https://www.figma.com/files/user/1346725392038677230?fuid=1346725392038677230' target="_blank"><FaFigma /></a>
      </div>
    )
  }
  
  export default Icones