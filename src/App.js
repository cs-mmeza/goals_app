import './App.css';
import { Routes, Route } from 'react-router';
import Layout from './components/shared/Layout.js';
import List from './components/list/List.js';
import Details from './components/new/Details.js';
import NotFound from './components/shared/NotFound.js';
import Modal from './components/shared/Modal.js';

function App() { // Goal esta siendo renderizado de la etiqueta main dentro de Main.js
  return ( // :id = means is a dynamic value
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<List />} />
        <Route path="/list" element={<List />} >
          <Route path="/list/:id" element={
            <Modal >
              <Details />
            </Modal>
          } />
        </Route>
        <Route path="/new" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
