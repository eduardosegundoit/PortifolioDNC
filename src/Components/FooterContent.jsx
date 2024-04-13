import styles from '../Components/FooterContent.module.css'
import Icones from '../Components/Icones'

function FooterContent() {
  
    return (
      <footer>
      <div className={styles.containerfooter}>
        <div>
          <h3>Meu contato:</h3>
          <p>+44 07361669143</p>
        </div>
        <div>
          <h3>Email:</h3>
          <a className={styles.emailLink} href={'https://mail.google.com/mail/u/0/#inbox'}>
          <p>eduardosegundoit@gmail.com</p>
          </a>
        </div>
        <div>
        <Icones/>
        </div>
      </div>
      </footer>
    )
  }
  
  export default FooterContent