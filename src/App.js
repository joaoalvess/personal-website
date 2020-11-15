import elsa from './assets/foto do queima rosca.jpeg';
import insta from './assets/insta.png';
import gmail from './assets/gmail.png';
import face from './assets/facebook.png';
import foto1 from './assets/queimando a rosca no seu.jpeg'
import foto2 from './assets/foto do politico gay3.jpeg'
import foto3 from './assets/foto gay2.jpeg'
import './styles.css';

function App() {
  return (
    <div className="parent">
            <div className="sidebar">
                <div className="sidebar-pos">
                    <h1 className="hino" >Mário Campos é <span>11</span>, é <span>11</span>, é <span>11!</span></h1>
                    <div className="img-sidebar">
                        <img src={elsa} />
                    </div>
                    <div className="img">
                        <a target="_blanck" href="https://www.facebook.com/Anderson-do-z%C3%A9-Baixinho-110578647473384" ><img className="image-icon" src={face} alt="facebook icon" /></a>
                        <a target="_blanck" href="https://www.instagram.com/andersondozebaixinho11/" ><img  src={insta} alt="insta icon" /></a>
                        <a target="_blanck" href="mailto:contato@andersonalvesferreira.com.br"><img className="gmail" src={gmail} alt="facebook icon" /></a>
                    </div>
                </div>
            </div>
            <div className="content">
                <section className="descrição">
                    <div className="divmaluca" >
                        <img className="fotologo" src={foto1} />
                    </div>
                    <h2>Anderson do <span>Zé Baixinho</span> </h2>
                    <h3>Vice <span >Douglas Campos</span></h3>
                    <p>
                        Estive ao lado do povo de Mário Campos durante um bom período, e por isso entendo as dificuldades desta cidade e sei que nossa terra precisa avançar mais. Compreendo também que precisamos melhorar muito pra chegarmos ao nosso objetivo: Reestruturar nossa cidade e alavancar a saúde da população. Por isso que eu repito toda hora:
                        Mário Campos é <span>11</span>, é <span>11</span>, é <span>11</span>, é <span>11!</span>
                    </p>
                    <div className="divmaluca" >
                        <img className="fotologo" src={foto2} />
                    </div>
                    <div className="divmaluca" >
                        <img className="fotologo" src={foto3} />
                    </div>
                </section>
            </div>
        </div>
  );
}

export default App;
