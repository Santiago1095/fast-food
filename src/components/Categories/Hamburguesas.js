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
  CardImg,
} from "reactstrap";

import imgLaEsquinaDelSabor from "../../assets/imgLaEsquinaDelSabor.png";
import imgLaPerradaDeYei from "../../assets/imgLaPerradaDeYei.png";
import imgElCalvo from "../../assets/imgElCalvo.png";

import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Hamburguesas() {
  return (
    <>
      <Container fluid className="py-1  bg-primary-subtle rounded-4">
        <div>
          <h1 className="text-dark text-center fw-bold py-2">
            <strong>HAMBURGUESAS</strong>
          </h1>
        </div>
        <CardGroup className="container-fluid">
          <Row xs={2} sm={2} md={3} lg={3}>
            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardImg
                        alt="imgLaEsquinaDelSabor"
                        src={imgLaEsquinaDelSabor}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </a>
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
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardImg
                        alt="imgLaEsquinaDelSabor"
                        src={imgLaEsquinaDelSabor}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </a>
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Doble Carne
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $15.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardImg
                        alt="imgLaEsquinaDelSabor"
                        src={imgLaEsquinaDelSabor}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </a>
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa La Encantadora
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $18.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardImg
                        alt="imgLaEsquinaDelSabor"
                        src={imgLaEsquinaDelSabor}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </a>
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa La Chikenpig
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $21.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
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
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $9.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-perrada-de-yei"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
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
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Especial
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $11.500 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-perrada-de-yei"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
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
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Doble Carne
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $14.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-perrada-de-yei"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
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
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Mexicana
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $12.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-perrada-de-yei"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
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
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
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
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
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
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <a
                      href="/restaurants/la-esquina-del-sabor"
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
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>

                      <Button
                        href="/restaurants/la-esquina-del-sabor"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="warning"
                        className="fw-bold d-grid border-dark"
                      >
                        Mas info
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </CardGroup>

        <CardTitle tag="h1" className="text-center fw-bold">
          Estamos ubicados en
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

          <h2 className="text-dark text-center fw-bold py-2">
            Siguenos en nuestras redes sociales
          </h2>

          <div className="text-center">
            <Button color="primary" style={{ margin: 10 }}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaFacebook style={{ width: 30, height: "auto" }} />
              </a>
            </Button>

            <Button color="danger" style={{ margin: 10 }}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaInstagram style={{ width: 30, height: "auto" }} />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
