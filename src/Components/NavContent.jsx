import styles from "./NavContent.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavContent() {
  
  return (
    <nav className={styles.NavContent}>
      <ul className={styles.Navlist}>
        <li><a className={styles.textNav} href='#Projetos'>Projetos</a></li>
        <li><a className={styles.textNav} href='#'>Tecnologias</a></li>
        <li><a className={styles.textNav} href='#Section'>Sobre mim</a></li>
        </ul>
        <ul className={styles.icons}>
        <li><a href='https://github.com/eduardosegundoit' target="_blank"><FaGithub /></a></li>
        <li><a href='https://www.linkedin.com/in/carlos-eduardo-segundo-dos-santos-726b182ba/' target="_blank"><FaLinkedin /></a></li>
        </ul>
        
      
       
    </nav>
  )
}

export default NavContent