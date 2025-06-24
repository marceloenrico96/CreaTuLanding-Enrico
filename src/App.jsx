import './App.css'
import NavBar from './components/navBar'
import ItemListContainer from './components/itemListContainer'


const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
};

export default App;


