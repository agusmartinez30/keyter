import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import PageGame from "./pages/game/PageGame";
import PageHome from "./pages/home/PageHome";


function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);



  const [listaUsuarios, setListaUsuarios] = useState([]);

  
  // funcion add user to localstorage

  // create users
  function crearUsuario(user) {
    console.log("guardadndo...");
    
    console.log(listaUsuarios);
    setListaUsuarios([...listaUsuarios, { name: user }]);
  }

  useEffect(() => {
    let data = window.localStorage.getItem("users");
    if (data) {
      setListaUsuarios(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(listaUsuarios));
  }, [listaUsuarios]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PageHome
              crearUsuario={crearUsuario}
              name={name}
              setName={setName}
              count={count}
              listaUsuarios={listaUsuarios}
              
            />
          }
        ></Route>
        <Route
          path="/game"
          element={
            <PageGame
              name={name}
              setName={setName}
              crearUsuario={crearUsuario}
              count={count}
              setCount={setCount}
            />
          }
        ></Route>
        {/*  <Route
          path="/ganadores"
          element={<PageGanadores name={name} count={count} />}
        ></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
