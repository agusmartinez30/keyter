import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  GanadorItem,
  GanadorTitle,
  Header,
  HomeContainer,
  HomeTitle,
  Icon,
  LayoutFlex,
  ListContainer,
  ListGanadores,
  Ranking,
  TextError,
} from "./PageHome.elements";

const PageHome = ({ crearUsuario, setName, name, listaUsuarios }) => {
  //VALIDAR!
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  listaUsuarios.sort(function (a, b) {
    if (a.intentos > b.intentos) {
      return 1;
    }
    if (a.intentos < b.intentos) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError(true);

      return;
    } else {
      navigate("/game");
    }
  };

  


  

  return (
    <HomeContainer className="home-container">
      <Header>
        <HomeTitle>Keyter</HomeTitle>
        <Icon src="https://cdn-icons-png.flaticon.com/512/807/807241.png" />
      </Header>
      <LayoutFlex>
        <FormContainer onSubmit={handleSubmit} className="form-container">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="ingrese su nombre.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          {error ? <TextError>Ingrese un nombre valido</TextError> : ""}
          <button type="submit">JUGAR</button>
        </FormContainer>

        <ListContainer>
          {/* <button onClick={cleanStorageWinners}>Limpiar</button> */}
          <GanadorTitle>Ganadores</GanadorTitle>
          <ListGanadores>
            <ul>
              {listaUsuarios.map((e, index) => (
                <li key={index}>
                  <Ranking>#{index + 1}</Ranking>
                  <GanadorItem>
                    Nombre: <span>{e.name.toLowerCase()}</span>
                  </GanadorItem>
                </li>
              ))}
            </ul>
          </ListGanadores>
        </ListContainer>
      </LayoutFlex>
    </HomeContainer>
  );
};

export default PageHome;
