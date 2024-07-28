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
  CardText,
} from "reactstrap";
import imgElBuenGusto from "../../assets/imgElBuenGusto.jpeg";
import imgYopalExpress from "../../assets/imgYopalExpress.jpg";
import imgLaLlamarada from "../../assets/imgLaLlamarada.jpg";
import imgTazBurguer from "../../assets/imgTazBurguer.jpg";
import imgRapiRoy from "../../assets/imgRapiRoy.png";

export default function ElBuenGusto() {
  return (
    <>
      <div>
        <h1 className="text-dark text-center fw-bold py-2">
          <strong>EL BUEN GUSTO</strong>
        </h1>
      </div>

      <Container className="py-1  bg-primary-subtle rounded-4">
        <CardGroup className="container-fluid">
          <Row>
            <Col xs="6 py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <img
                      alt="Card cap"
                      src={imgElBuenGusto}
                      width="100%"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Sencilla
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas, acompañado con
                        papas a la francesa .
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        $12.000
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col xs="6 py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <img
                      alt="Card cap"
                      src={imgElBuenGusto}
                      width="100%"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Sencilla
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas, acompañado con
                        papas a la francesa .
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        $12.000
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>


            <Col xs="6 py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <img
                      alt="Card cap"
                      src={imgElBuenGusto}
                      width="100%"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Sencilla
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas, acompañado con
                        papas a la francesa .
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        $12.000
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>


            <Col xs="6 py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <img
                      alt="Card cap"
                      src={imgElBuenGusto}
                      width="100%"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Sencilla
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas, acompañado con
                        papas a la francesa .
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        $12.000
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

          </Row>
        </CardGroup>
      </Container>
    </>
  );
}
