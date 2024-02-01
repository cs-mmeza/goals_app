import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/shared/Layout.js';
import List from './components/Private/list/List.js';
import Details from './components/Private/new/Details.js';
import NotFound from './components/shared/NotFound.js';
import Modal from './components/shared/Modal';
import { useContext, useEffect } from 'react';
import { ContextGoals } from './memory/Goals.js';
import { requestGoals } from './services/Requests';
import Access from './components/Public/Access/Access';
import Register from './components/Public/register/Register';
import Authenticate from './components/shared/Authenticate';

function App() { // Goal esta siendo renderizado de la etiqueta main dentro de Main.js
    const [, dispatch] = useContext(ContextGoals);

    useEffect( () => {
        (async function () {
          const goals = await requestGoals();
          dispatch({ type: "place", goals });
        })();
      }, [dispatch]);

      return (
        <Routes>
          <Route path="/"
            element={<Navigate to="/list" />}
          />
          <Route element={<Layout />}>
            <Route path="/access" element={<Access />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<Layout privato />}>
            <Route element={<Authenticate />} >
              <Route path="/list" element={<List />}>
                <Route
                  path="/list/:id"
                  element={<Modal><Details /></Modal>}
                />
              </Route>
              <Route path="/new" element={<Details />} />
            </Route>
          </Route>
        </Routes>
      );
}

export default App;
