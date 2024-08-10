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
import imgRapiRoy from "../assets/imgRapiRoy.png";
import imgGurmetYSazon from "../assets/imgGurmetYSazon.jpeg";

export default function Cards() {
  return (
    <Container fluid className="py-1  bg-primary-subtle rounded-4">
      <CardGroup className="container-fluid">
        <Row xs={1} sm={2} md={4}>
          <Col className="py-3">
            <Card
              style={{
                width: "auto",
              }}
              className="card h-100"
            >
              <CardBody>
                <CardTitle tag="h5" className="text-start fw-bold">
                  Arroz Chino Yopal Express
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Asiatica
                </CardSubtitle>
              </CardBody>
              <img
                alt="imgYopalExpress"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  Arroz Chino Yopal Express
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Asiatica
                </CardSubtitle>
              </CardBody>
              <img
                alt="imgYopalExpress"
                src={imgYopalExpress}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
              <img
                alt="imgLaLlamarada"
                src={imgLaLlamarada}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  Tax Burguer
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="imgTazBurguer"
                src={imgTazBurguer}
                width="auto%"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  Rapi Roy
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="imgRapiRoy"
                src={imgRapiRoy}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button color="primary" block="bool" className="fw-bold">
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  El Buen Gusto
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgGurmetYSazon}
                width="auto"
                className="rounded-5 p-2"
              />
              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
