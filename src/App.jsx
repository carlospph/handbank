import './App.css';
import Header from './componentes/Header/Header';
import { HeaderGov } from './componentes/HeaderGov/HeaderGov';
import { Slider } from './componentes/Slider/Slider';

function App() {
  return (
    <>
      <HeaderGov />
      <Header />
      <Slider />
    </>
  );
}

export default App;
