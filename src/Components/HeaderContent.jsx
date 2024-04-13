import Button from "./Button"
import styles from "./HeaderContent.module.css"
import { useEffect, useState } from "react"

function HeaderContent() {

  const [text, setText] = useState('');
  const toRotate = ['Carlos Eduardo!', 'Desenvolvedor Front-End'];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 150;
  const [delta, setDelta] = useState(100)

  useEffect(()=>{
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return()=>{clearInterval(ticker)}
  })

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedtext = isDeleting ? fullText.substring(0,text.length -1 ) : fullText.substring(0,text.length +1);

    setText(updatedtext);

    if(!isDeleting && updatedtext === fullText){
      setIsDeleting(true)
      setDelta(period);
    } else if (isDeleting && updatedtext === '') {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);

    }
  
  }
  
    return (
      <header>
        <div className={styles.HeaderContent}>
        <h1>Olá, eu sou {text}</h1>
        <div className={styles.pHeader}><p>
        Minha paixão pela tecnologia é o que me impulsiona todos os dias.<br></br>
        Desde jovem, mergulhei no mundo da inovação e da computação,<br></br>
        fascinado pelas possibilidades que ela oferece. Estou constantemente<br></br>
        buscando aprender e me desenvolver nesse campo em constante evolução.<br></br>
        Acredito firmemente que a tecnologia tem o poder de transformar<br></br>
        vidas e resolver problemas complexos.<br></br>
        Estou entusiasmado para contribuir e fazer parte desse progresso contínuo.</p><br></br></div>
        </div>
        <div className={styles.botaoHeader}><Button link={"https://github.com/eduardosegundoit"} text={'Saber mais'}/></div>
      </header>
    )
  }
  
  export default HeaderContent