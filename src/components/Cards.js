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
import imgNoDisponible from "../assets/imgNoDisponible.png";
import imgYopalExpress from "../assets/imgYopalExpress.jpg";
import imgLaLlamarada from "../assets/imgLaLlamarada.jpg";
import imgTazBurguer from "../assets/imgTazBurguer.jpg";
import imgRapiRoy from "../assets/imgRapiRoy.png";
import imgGurmetYSazon from "../assets/imgGurmetYSazon.jpeg";
import imgLaPerradaDeYei from "../assets/imgLaPerradaDeYei.png"

export default function Cards() {
  return (
    <Container fluid className="py-1  bg-primary-subtle rounded-4">
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
                  Gurmet Y Sazon
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>

              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  alt="imgYopalExpress"
                  src={imgGurmetYSazon}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>

              <CardBody>
                <Button
                  href="/restaurants/gurmet-y-sazon"
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
                  Arroz Chino Yopal
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Asiatica
                </CardSubtitle>
              </CardBody>

              <a
                href="/restaurants/gurmet-y-sazon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImg
                  href="/restaurants/restaurants/gurmet-y-sazon"
                  alt="imgYopalExpress"
                  src={imgYopalExpress}
                  width="auto"
                  className="rounded-5 p-2"
                />
              </a>

              <CardBody>
                <Button
                  href="/restaurants/el-buen-gusto"
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
                  La Perrada De Yei
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  Comida Rapida
                </CardSubtitle>
              </CardBody>
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
              <CardBody>
                <Button
                  href="/restaurants/la-perrada-de-yei"
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
                  No Disponible
                </CardTitle>
                <CardSubtitle className="mb-1 text-muted fw-bold" tag="h6">
                  No Disponible
                </CardSubtitle>
              </CardBody>
              <img
                alt="Card cap"
                src={imgNoDisponible}
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
