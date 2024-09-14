import {
  Row,
  Container,
  Col,
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  Button,
  CardGroup,
  CardImg,
} from "reactstrap";
import imgNoDisponible from "../assets/imgNoDisponible.png";

import imgYopalExpress from "../assets/imgYopalExpress.png";
import imgLaLlamarada from "../assets/imgLaLlamarada.png";
import imgTazBurguer from "../assets/imgTazBurguer.jpg";
import imgRapiRoy from "../assets/imgRapiRoy.png";
import imgGurmetYSazon from "../assets/imgGurmetYSazon.png";
import imgLaPerradaDeYei from "../assets/imgLaPerradaDeYei.png";
import imgPizzeria19 from "../assets/imgPizzeria19.png";
import imgElCarriel from "../assets/imgElCarriel.png";
import imgElCalvo from "../assets/imgElCalvo.png";
import imgMoryFresas from "../assets/imgMoryFresas.png";
import imgArepasArepas from "../assets/imgArepasArepas.png";
import imgCrocante from "../assets/imgCrocante.png";
import imgQueHuboMiPerro from "../assets/imgQueHuboMiPerro.png";
import imgFresasYCrema from "../assets/imgFresasYCrema.png";
import imgPukyChicharon from "../assets/imgPukyChicharon.png";

export default function Cards() {
  return (
    <Container fluid className="py-1  bg-primary-subtle rounded-4">
      <CardGroup className="container-fluid">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={10}>
          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Gourmet Y Sazon
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>

              <a
                href="/restaurants/gourmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgYopalExpress"
                  src={imgGurmetYSazon}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>

              <CardBody>
                <Button
                  href="/restaurants/gourmet-y-sazon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Pizzeria La 19 Con 30
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/pizzeria-la-19-con-30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgPizzeria19"
                  src={imgPizzeria19}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/pizzeria-la-19-con-30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>



          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  La Perrada De Yei
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
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
              <CardBody>
                <Button
                  href="/restaurants/la-perrada-de-yei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>



          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  La Esquina Del Sabor
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/la-esquina-del-sabor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgPizzeria19"
                  src={imgPizzeria19}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/la-esquina-del-sabor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Arroz Chino Yopal
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Asiatica
                </CardSubtitle>
              </CardBody>

              <a
                href="/restaurants/arroz-chino-express"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  href="/restaurants/restaurants/arroz-chino-expresss"
                  alt="imgYopalExpress"
                  src={imgYopalExpress}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>

              <CardBody>
                <Button
                  href="/restaurants/arroz-chino-express"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  La Llamarada
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Tradicional
                </CardSubtitle>
              </CardBody>

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
              <CardBody>
                <Button
                  href="/restaurants/la-llamarada"
                  className="bg-primary  fw-bold d-grid "
                  rel="noopener noreferrer"
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Tax Burguer
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
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
              <CardBody>
                <Button
                  href="/restaurants/taz-burguer"
                  className="bg-primary  fw-bold d-grid "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Rapi Roy
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
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
              <CardBody>
                <Button
                  href="/restaurants/rapi-roy"
                  className="bg-primary  fw-bold d-grid "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          

          

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  El Carriel
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/el-carriel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgElCarriel"
                  src={imgElCarriel}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/el-carriel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Hamburguesas El Calvo
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/hamburguesas-el-calvo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgElCalvo"
                  src={imgElCalvo}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/hamburguesas-el-calvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Mory Fresas
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Heladeria
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/mory-fresas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgMoryFresas"
                  src={imgMoryFresas}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/mory-fresas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Arepas & Arepas
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/arepas-arepas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgArepasArepas"
                  src={imgArepasArepas}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/arepas-arepas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Crocante
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/arepas-arepas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgCrocante"
                  src={imgCrocante}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/arepas-arepas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Que Hubo Mi Perro
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/arepas-arepas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgQueHuboMiPerro"
                  src={imgQueHuboMiPerro}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/arepas-arepas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Fresas & Cremas
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Heladeria
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/arepas-arepas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgFresasYCrema"
                  src={imgFresasYCrema}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/arepas-arepas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Puky Chicharron
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <a
                href="/restaurants/arepas-arepas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgPukyChicharon"
                  src={imgPukyChicharon}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/restaurants/arepas-arepas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary  fw-bold d-grid "
                >
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  );
}
