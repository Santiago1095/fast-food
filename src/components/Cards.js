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
} from "reactstrap";
import imgElBuenGusto from "../assets/imgElBuenGusto.jpeg";
import imgYopalExpress from "../assets/imgYopalExpress.jpg";
import imgLaLlamarada from "../assets/imgLaLlamarada.jpg";
import imgTazBurguer from "../assets/imgTazBurguer.jpg";

export default function Cards2() {
  return (
    <Container className= "py-3  bg-primary-subtle rounded-4 fst-italic">
      <CardGroup className="container-fluid">
        <Row>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start ">
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgElBuenGusto} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Arroz Chino Yopal Express</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Asiatica
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgYopalExpress} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>

          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">La Llamarada</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Tradicional
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgLaLlamarada} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Tax Burguer</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgTazBurguer} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Tax Burguer</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgTazBurguer} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Tax Burguer</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgTazBurguer} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Tax Burguer</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgTazBurguer} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Tax Burguer</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgTazBurguer} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
                  Mas info
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="py-3">
            <Card
              style={{
                width: "18rem",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5">Tax Burguer</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img alt="Card cap" src={imgTazBurguer} width="100%" />
              <CardBody>
                <Button color="primary" block="bool">
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
