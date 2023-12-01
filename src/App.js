import './App.css';
import Header from './components/shared/Header.js'
import Main from './components/shared/Main.js'
import Footer from './components/shared/Footer.js'
import List from './components/list/List.js';
import Details from './components/new/Details.js';

function App() { // Goal esta siendo renderizado de la etiqueta main dentro de Main.js
  return (
    <div className="App">
      <Header></Header>
      <Main>
        {/* <List></List> */}
        <Details></Details>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
