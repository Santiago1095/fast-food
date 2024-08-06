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

import { SiWhatsapp } from "react-icons/si";

export default function ElBuenGusto() {
  return (
    <>
      <div>
        <h1 className="text-dark text-center fw-bold py-2">
          <strong>EL BUEN GUSTO</strong>
        </h1>
      </div>

      <div>
        <h2 className="text-dark text-center fw-bold py-2">
          Realiza tus pedidos al numero
          <a className="" href="tel:+57 3213679910">
            {" 321 367 9910 "}
          </a>
          o escribenos al
          <a href="https://wa.link/olzdv2" className="">
            {" Whatsapp "}
            
          </a>
        </h2>

        <Button
      variant="outline-light"
      className="border border-0 py-1"
      style={{
        position: "fixed",
        bottom: 25,
        right: 10,
        zIndex: 999,
        zoom: 1.5,
        borderRadius: 50,
        padding: 6,
      }}
    >
      <a href="https://wa.link/olzdv2" target="_blank" rel="noopener noreferrer" className="text-white">
        <SiWhatsapp
          className="bg-success py-2"
          style={{
            width: "auto",
            height: "auto",
            justifyContent: "center",
            borderRadius: 50,
            padding: 7,
          }}
        />
      </a>
    </Button>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
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
                        <strong> $12.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </CardGroup>
        <CardTitle tag="h1" className="text-center fw-bold">
          En donde estamos ubicados
        </CardTitle>
        <div className="py-2">
          <div className="ratio ratio-21x9 ">
            <iframe
              className="rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275.77946446624827!2d-72.40646979254676!3d5.335859216787204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0dca93add7cb%3A0x46dfbc4a24770cfe!2sYopal%2C%20Casanare!5e1!3m2!1ses!2sco!4v1722934445055!5m2!1ses!2scohttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.1322254067773!2d-72.40713117218571!3d5.335906629025571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0dc91ed7b7cf%3A0x620235eb068a9f46!2sCra.%208b%20%2318-2%20a%2018-92%2C%20Yopal%2C%20Casanare!5e0!3m2!1ses!2sco!4v1722934723278!5m2!1ses!2scohttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.2860114223361!2d-72.40713117218571!3d5.335906629025571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0dc91ed7b7cf%3A0x620235eb068a9f46!2sCra.%208b%20%2318-2%20a%2018-92%2C%20Yopal%2C%20Casanare!5e1!3m2!1ses!2sco!4v1722934829469!5m2!1ses!2sco"
              title="Restaurante El Buen Gusto"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}
