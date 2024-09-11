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

import imgMoryFresas from "../../assets/imgMoryFresas.png";
import imgFresasYCrema from "../../assets/imgFresasYCrema.png";

export default function HotDogs() {
  return (
    <Container fluid className="py-1  bg-primary-subtle rounded-4">
      <h1 className="text-dark text-center fw-bold py-2">
        <strong>HOT DOG</strong>
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
        </Row>
      </CardGroup>
    </Container>
  );
}
