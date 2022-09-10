import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import Inicio from './componentes/paginas/Inicio' 
import ItemDetail from './componentes/navbar/ItemDetail';
import SwapiContainer from './componentes/swapi/SwapiContainer';
import ItemListContainer from './componentes/navbar/ItemListContainer'


function App() {
  //DOM
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
          <Route exact path="/" element={<Inicio/>}/>
            <Route  path='/:id' element={<ItemDetail/>}/>
            <Route exact path="/Catalago" element={<ItemListContainer/>}/>
            <Route  path="/SwapiContainer" element={<SwapiContainer/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
