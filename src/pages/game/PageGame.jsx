import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";

import {
  GameContainer,
  GameTitle,
  GridLayout,
  InfoContainer,
  InfoGame,
  Layout,
  BtnHome,
} from "./PageGame.elements";

const PageGame = ({ name, setName, crearUsuario }) => {
  let arrayNumberRandom = [];
  const navigate = useNavigate();

  // generamos una funcion para obtener la llave
  function getKeyMaster(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
  }

  let llaveMaestra = getKeyMaster(1, 8);

  // generamos una funcion para obtener el numero de cards
  function getNumberCards(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  for (let x = 0; x < 100; x++) {
    let arrayCards = getNumberCards(1, 8);
    while (arrayNumberRandom.indexOf(arrayCards) === -1) {
      arrayNumberRandom.push(arrayCards);
    }
  }



  const backPageHome = () => {
    setName("");
    navigate("/");
  };


  return (
    <GameContainer>
      <Layout>
        <GameTitle>Adivina la llave maestra</GameTitle>
        <InfoContainer>
          <BtnHome onClick={backPageHome}>Volver</BtnHome>
          <InfoGame>nombre: {name}</InfoGame>
        </InfoContainer>

        <GridLayout>
          {arrayNumberRandom.map((e) => (
            <Card
              key={e}
              nroLlave={e}
              keyMaster={llaveMaestra}
              crearUsuario={crearUsuario}
              name={name}
              setName={setName}
            />
          ))}
        </GridLayout>
      </Layout>
    </GameContainer>
  );
};

export default PageGame;
