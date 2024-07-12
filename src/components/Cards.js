import {
  Row,
  Container,
  Col,
  CardBody,
  CardTitle,
  CardText,
  Card,
  CardSubtitle,
 
  Button,
  CardGroup,
} from "reactstrap";
import imgElBuenGusto from "../assets/imgElBuenGusto.jpeg"
import imgYopalExpress from "../assets/imgYopalExpress.jpg"
import imgLaLlamarada from "../assets/imgLaLlamarada.jpg"
import imgTazBurguer from "../assets/imgTazBurguer.jpg";

export default function Cards2() {
  return (
    <div>
      <Container fluid className="py-3 d-flex justify-content-around">
        <CardGroup>
          <Row xs="auto">
            <Col>
              <Card
                style={{
                  width: "18rem",
                }}
                className="card h-100"
              >
                <CardBody>
                  <CardTitle tag="h5">El Buen Gusto</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Comida Rapida
                  </CardSubtitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src={imgElBuenGusto}
                  width=""
                />
                <CardBody>
                  <CardText className="h-60">
                    Nos especialisamos en toda clase de comidas rapidas, bien
                    prepadara y con los mejores ingredientes seleccionados
                  </CardText>
                  <Button color="primary" block="bool">
                    Mas info
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
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
                <img
                className="center"
                  alt="Card cap"
                  src={imgYopalExpress} 
                  width=""
                

                />
                <CardBody>
                  <CardText className="h-60">
                  Nos especialisamos en toda clase de comidas rapidas, bien
                  prepadara y con los mejores ingredientes seleccionados 
                  
                  </CardText>
                  <Button color="primary" block="bool">
                    Mas info
                  </Button>
                </CardBody>
              </Card>
            </Col>

            <Col>
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
                <img
                  alt="Card cap"
                  src={imgLaLlamarada}
                  width=""
                />
                <CardBody>
                  <CardText>
                    Nos especialisamos en toda clase de comidas rapidas, bien
                    prepadara y con los mejores ingredientes seleccionados
                  </CardText>
                  <Button color="primary" block="bool">
                    Mas info
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
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
                <img
                  alt="Card cap"
                  src={imgTazBurguer}
                  width=""
                />
                <CardBody>
                  <CardText>
                    Nos especialisamos en toda clase de comidas rapidas, bien
                    prepadara y con los mejores ingredientes seleccionados
                  </CardText>
                  <Button color="primary" block="bool">
                    Mas info
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
}
