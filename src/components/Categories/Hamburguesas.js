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
      </Container>
    </>
  );
}
