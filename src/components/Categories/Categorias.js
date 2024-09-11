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

import imgComidaRapida from "../../assets/imgComidaRapida.png";
import imgComidaMexicana from "../../assets/imgComidaMexicana.png";
import imgHeladeria from "../../assets/imgHeladeria.png";
import imgBurger from "../../assets/imgBurger.png";
import imgHotDogs from "../../assets/imgHotDogs.png";
import imgPizza1 from "../../assets/imgPizza1.png";
import imgPicada from "../../assets/imgPicada.png";

export default function Categorias() {
  return (
    <Container fluid className="py-1  bg-primary-subtle rounded-4">
      <h1 className="text-dark text-center fw-bold py-2">
        <strong>TODAS LAS CATEGORIAS</strong>
      </h1>
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
                  Comidas Rapidas
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comidas Rapidas
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/comidas-rapidas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgComidaRapida"
                  src={imgComidaRapida}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/comidas-rapidas"
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
                  Heladeria
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Heladeria
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/heladerias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgHeladeria"
                  src={imgHeladeria}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/heladerias"
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
                  Comida Mexicana
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Mexicana
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/comidas-mexicanas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgComidaMexicana"
                  src={imgComidaMexicana}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/comidas-mexicanas"
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
                  Hamburguesas
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Hamburguesas
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/hamburguesas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgBurger"
                  src={imgBurger}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/hamburguesas"
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
                  Hot Dog
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Hot Dog
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/hot-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgHotDogs"
                  src={imgHotDogs}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/hot-dogs"
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
                  Pizza
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Pizza
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/pizza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgPizza1"
                  src={imgPizza1}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/pizza"
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
                  Picadas
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Picadas
                </CardSubtitle>
              </CardBody>
              <a
                href="/categorias/picadas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgPicada"
                  src={imgPicada}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>
              <CardBody>
                <Button
                  href="/categorias/picadas"
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
