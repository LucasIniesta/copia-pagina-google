import Word from './componentes/Word';
import Menu from './componentes/Menu';
import ImagemPerfil from './componentes/ImagemPerfil';
import LogoGoogle from './componentes/LogoGoogle';
import Botao from './componentes/Botao';
import Checkin from './componentes/Checkin';
import BarraPesquisa from './componentes/BarraPesquisa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Word text='Gmail'/>
        <Word text='Imagens'/>
        <Menu/>
        <ImagemPerfil/>
      </header>
      <section>
        <LogoGoogle/>
        <BarraPesquisa/>
        <Botao text='Pesquisa Google'/>
        <Botao text='Estou com sorte'/>
        <Checkin/>
      </section>
      <footer>
        <div>
          <Word text='Brasil'/>
        </div>
        <div>
          <Word text='Sobre'/>
          <Word text='Publicidade'/>
          <Word text='Negócios'/>
          <Word text='Como funciona a Pesquisa'/>
        </div>
      </footer>
    </div>
  );
}

export default App;
