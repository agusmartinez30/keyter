import { useNavigate } from "react-router-dom";
import "../../styles/Card.css";
import { CardContainer, NumberKey } from "./Card.elements";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Card = ({ nroLlave, name, setName, keyMaster, crearUsuario }) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleClick = () => {
    if (keyMaster == nroLlave) {
      AlertSuccess();

      crearUsuario(name);

      setName("");
      navigate("/");

      return;
    } else {
      AlertLoser();

    }
  };

  function AlertLoser() {
    Swal.fire({
      title: "Suerte para la proxima",
      text: "¿Quieres interntarlo nuevamente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5141b0fe",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI",
      cancelButtonText: "SALIR",
    }).then((result) => {
      if (result.isConfirmed) {
      } else {
        setName("");
        navigate("/");
      }
    });
  }

  function AlertSuccess() {
    Swal.fire("Felicidades!", "Adivinaste la llave ganadora", "success");
  }

  return (
    <>
      <CardContainer onClick={handleClick}>
        <img src="https://cdn-icons-png.flaticon.com/512/2829/2829831.png" />
        <NumberKey>Llave: {nroLlave}</NumberKey>
      </CardContainer>
    </>
  );
};

export default Card;
