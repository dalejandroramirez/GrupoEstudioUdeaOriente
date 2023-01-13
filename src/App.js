import "./App.css";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./store/index";
import SignIn from "./users/SignIn";

const SinHacer = ({ nombre }) => {
  return <h1>Sin hacer la pagina {nombre}</h1>;
};

const Page404 = () => {
  return <div> Esta pagina no existe</div>;
};

const UsuariosOutlet = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<SinHacer nombre="inicio" />} />

          <Route path="/usuario" element={<UsuariosOutlet />} />
          <Route path="/registro" element={<SinHacer nombre="registro" />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path=":contenido/:id"
            element={<SinHacer nombre="contenido" />}
          />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
