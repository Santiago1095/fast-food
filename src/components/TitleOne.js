import { Container } from "reactstrap";
import img1 from "./../assets/img1.jpeg";

function TitleOne() {
  return (
    <Container className="shadow-lg">
      <div className="">
        <h1 className=" text-white  text-center  py-3 shadow-lg fw-bold">
          <strong>PLAZOLETA DE COMIDAS EN YOPAL</strong>
        </h1>
      </div>

      <img
        src={img1}
        alt=""
        className="d-block w-100 "
        style={{
          height: "20rem",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="">
      <h1 className=" text-white  text-center  py-3 shadow-lg fw-bold">
          <strong>
            REALIZA TUS PEDIDOS A DOMICILIO O VISITANOS EN NUESTRAS INSTALACIONES
          </strong>
        </h1>
      </div>
    </Container>
  );
}
export default TitleOne;
