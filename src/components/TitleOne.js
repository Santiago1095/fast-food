import { Container, } from "reactstrap";
import img1 from "./../assets/img1.jpeg";

function TitleOne() {
  return (
    <Container fluid>
      <h1 className="text-white text-center fluid pt-5 shadow-lg fw-bold">
      <strong>
        GASTRONOMIA EN YOPAL
        </strong>
      </h1>

      <img
        src={img1}
        alt=""
        className="d-block w-100"
        style={{
          height: "20rem",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <h1 className="text-white text-center py-4 shadow-lg fw-bold" >
      <strong>
        REALIZA TUS PEDIDOS A DOMICILIO O VISITANOS EN NUESTRAS INSTALACIONES
        </strong>
      </h1>
    </Container>
  );
}
export default TitleOne;
