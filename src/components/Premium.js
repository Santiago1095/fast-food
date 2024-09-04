import imgYopalExpress from "../assets/imgYopalExpress.jpg";
import imgLaLlamarada from "../assets/imgLaLlamarada.jpg";
import imgTazBurguer from "../assets/imgTazBurguer.jpg";
import imgRapiRoy from "../assets/imgRapiRoy.png";
import imgGurmetYSazon from "../assets/imgGurmetYSazon.jpeg";
import imgLaPerradaDeYei from "../assets/imgLaPerradaDeYei.png";
import imgNoDisponible from "../assets/imgNoDisponible.png";

import { Button, Container, CardImg } from "reactstrap";

export default function Premium() {
  return (
    <Container fluid>
      <div className="slider bg-primary-subtle rounded-4 container-fluid py-2">
        <div className="slide-track">
          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                1
              </h1>
              <a
                href="/restaurants/gourmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  fluid
                  alt="imgGurmetYSazon"
                  src={imgGurmetYSazon}
                  width="auto"
                  className="rounded-5 p-2 img-thumbnail"
                />
              </a>
              <Button
                href="/restaurants/gourmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                2
              </h1>
              <a
                href="/restaurants/arroz-chino-express"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgYopalExpress"
                  src={imgYopalExpress}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/arroz-chino-express"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                3
              </h1>
              <a
                href="/restaurants/la-llamarada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgLaLlamarada"
                  src={imgLaLlamarada}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/la-llamarada"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                4
              </h1>
              <a
                href="/restaurants/taz-burguer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgTazBurguer"
                  src={imgTazBurguer}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/taz-burguer"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                5
              </h1>
              <a
                href="/restaurants/rapi-roy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgRapiRoy"
                  src={imgRapiRoy}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/rapi-roy"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                6
              </h1>
              <a
                href="/restaurants/la-perrada-de-yei"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgLaPerradaDeYei"
                  src={imgLaPerradaDeYei}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/la-perrada-de-yei"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                7
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                8
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                9
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                10
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                1
              </h1>
              <a
                href="/restaurants/gourmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgGurmetYSazon"
                  src={imgGurmetYSazon}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gourmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                2
              </h1>
              <a
                href="/restaurants/arroz-chino-express"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgYopalExpress"
                  src={imgYopalExpress}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/arroz-chino-express"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                3
              </h1>
              <a
                href="/restaurants/la-llamarada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgLaLlamarada"
                  src={imgLaLlamarada}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/la-llamarada"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                4
              </h1>
              <a
                href="/restaurants/taz-burguer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgTazBurguer"
                  src={imgTazBurguer}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/taz-burguer"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                5
              </h1>
              <a
                href="/restaurants/rapi-roy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgRapiRoy"
                  src={imgRapiRoy}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/rapi-roy"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                6
              </h1>
              <a
                href="/restaurants/la-perrada-de-yei"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgLaPerradaDeYei"
                  src={imgLaPerradaDeYei}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/la-perrada-de-yei"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                7
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                8
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                9
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgNoDisponible"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="slide ms-3">
              <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">
                10
              </h1>
              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgYopalExpress"
                  src={imgNoDisponible}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <Button
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
                outline
                color="dark"
                className="fw-bold mt-2"
              >
                Mas info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
