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
import imgPizzeria19 from "../../assets/imgPizzeria19.png";


export default function HotDogs() {
  return (
    <>
      <Container fluid className="py-1  bg-primary-subtle rounded-4">
        <div>
          <h1 className="text-dark text-center fw-bold py-2">
            <strong>Perros Calientes</strong>
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
                      Perro Caliente
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $8.000 </strong>
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
                      Mechi Perro Sencillo
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
                      Mechi Perro Combo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Esquina Del Sabor
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $19.000 </strong>
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
                      Perro Sencilo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $7.000 </strong>
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
                      Perro Especial
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $8.500 </strong>
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
                      Perro Americano
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        La Perrada De Yei
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $8.000 </strong>
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
                      Perro Americano Con Pollo
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
                      href="/restaurants/la-perrada-de-yei"
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
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                      Perro Especial
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                     Pizzeria La 19
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $19.000 </strong>
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
                        alt="imgPizzeria19"
                        src={imgPizzeria19}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </a>
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                      Perro Camaron
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Pizzeria La 19
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $20.000 </strong>
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
                        Perro Sencillo 
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
                      Perro Sencillo 
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
                      Perro Sencillo 
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
