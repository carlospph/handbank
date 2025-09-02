import './App.css';
import { BarNews } from './componentes/BarNews/BarNews';
import Header from './componentes/Header/Header';
import { HeaderGov } from './componentes/HeaderGov/HeaderGov';
import { Slider } from './componentes/Slider/Slider';

function App() {
  return (
    <>
      <HeaderGov />
      <Header />
      <Slider />
      <BarNews/>
    </>
  );
}

export default App;
