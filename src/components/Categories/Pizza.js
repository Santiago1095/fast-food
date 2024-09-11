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


import imgPizzeria19 from "../../assets/imgPizzeria19.png";

export default function Pizza() {
  return (
    <Container fluid className="py-1  bg-primary-subtle rounded-4">
      <h1 className="text-dark text-center fw-bold py-2">
        <strong>PIZZA</strong>
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
        </Row>
      </CardGroup>
    </Container>
  );
}
