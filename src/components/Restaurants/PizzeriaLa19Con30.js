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

import imgPizza from "../../assets/imgPizza.png";
import imgHamburguesa from "../../assets/imgHamburguesa.png";
import imgHamburguesa2 from "../../assets/imgHamburguesa2.png";
import imgHamburguesa3 from "../../assets/imgHamburguesa3.png";
import imgHotDog from "../../assets/imgHotDog.png";
import imgHotDog2 from "../../assets/imgHotDog2.png";
import imgPicada1 from "../../assets/imgPicada1.png";
import imgCarnePlancha from "../../assets/imgCarnePlancha.png";
import imgCarneEncebollada from "../../assets/imgCarneEncebollada.png";
import imgSalchipapa1 from "../../assets/imgSalchipapa1.png";
import imgSalchipapa2 from "../../assets/imgSalchipapa2.png";
import imgSalchipapa3 from "../../assets/imgSalchipapa3.png";
import imgSalchipapa4 from "../../assets/imgSalchipapa4.png";
import imgSalchipollo from "../../assets/imgSalchipollo.png";
import imgSandwich from "../../assets/imgSandwich.png";
import imgMazorcada1 from "../../assets/imgMazorcada1.png";
import imgPechugaPlancha from "../../assets/imgPechugaPlancha.png";
import imgHamburguesaPollo1 from "../../assets/imgHamburguesaPollo1.png";
import imgHamburguesaPollo2 from "../../assets/imgHamburguesaPollo2.png";
import imgPicada2 from "../../assets/imgPicada2.png";
import imgPicada3 from "../../assets/imgPicada3.png";
import imgPatacon1 from "../../assets/imgPatacon1.png";
import imgPatacon2 from "../../assets/imgPatacon2.png";
import imgSopa1 from "../../assets/imgSopa1.png";
import imgSandwich1 from "../../assets/imgSandwich1.png";
import imgSandwichPollo1 from "../../assets/imgSandwichPollo1.png";
import imgCostillaBBQ1 from "../../assets/imgCostillaBBQ1.png";

import ImgGaseosaPersonal from "../../assets/ImgGaseosaPersonal.png";
import imgGaseosa15LtPostobon from "../../assets/imgGaseosa15LtPostobon.png";
import imgGaseosa3LtCoCua from "../../assets/imgGaseosa3LtCoCua.png";
import imgAguaBotella from "../../assets/imgAguaBotella.png";
import imgAguaGas from "../../assets/imgAguaGas.png";
import imgJugos from "../../assets/imgJugos.jpeg";
import imgJugoJarra from "../../assets/imgJugoJarra.png";
import imgCitrica1 from "../../assets/imgCitrica1.png";
import imgCitricaSoda from "../../assets/imgCitricaSoda.png";

import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function PizzeriaLa19Con30() {
  return (
    <>
      <div>
        <h1 className="text-dark text-center fw-bold py-2">
          <strong>PIZZERIA LA 19 CON 30</strong>
        </h1>
        <h3 className="text-dark text-center fw-bold ">
          <strong>Calle 30 Con 19 Barrio El Gavan</strong>
        </h3>
      </div>

      <div>
        <h2 className="text-dark text-center fw-bold py-2">
          Realiza tus pedidos al numero
          <a className="" href="tel: +57 3107925737">
            {" 310 792 5737"}
          </a>
          o escribenos al
          <a
            href="https://wa.link/olzdv2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success"
          >
            {" Whatsapp "}
          </a>
        </h2>

        <h2 className="text-dark text-center fw-bold py-2">
          ​​Horario de atención de lunes a domingo de 16:00 - 23:00
        </h2>

        <Button
          variant="outline-dark"
          className="border border-0 py-1 bg-white"
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
          <a
            href="https://wa.link/olzdv2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
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

      <Container fluid className="py-1  bg-primary-subtle rounded-4">
        <CardGroup className="container-fluid">
          <Row xs={2} sm={2} md={3} lg={3}>
            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="Card cap"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Hawaiana
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, piña
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      height="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Pollo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, champiñones, pollo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="Card cap"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Carne
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, carne
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesa"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Criolla
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, carne, maiz tierno
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Tocineta
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, salchicha, tocineta
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Chorrizo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, Chorrizo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Salchicha
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, salchicha
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Caribeña
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, maduro, camaron, chicharron
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Llanerita
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, maiz, maduro, carne, chorizo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Maduro
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, maduro, pollo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                       Pizza Camaron
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, cebolla, pimenton, camaron
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Marinera
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Jamon, queso, cebolla, pimenton, carne, calamar
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Mexicana
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Jamon, queso, cebolla, pimenton, carne, jalapeños
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Costilla BBQ
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Jamon, queso, costilla, tocineta, salsa BBQ
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza De La Casa
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Jamon, queso, champiñones, peperoni, salsa picante
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Tropical
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Queso, durazno, breva, cereza, uva pasa
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPizza"
                      src={imgPizza}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Pizza Salami 
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                     Jamon, queso, cebolla, salami, salsa picante
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesa"
                      src={imgHamburguesa}
                      width="auto"
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
                        Carne, queso, jamon, huevo, papa chips
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $14.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesa2"
                      src={imgHamburguesa2}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                       Carne, queso, jamon, huevo, papa chips
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $19.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesa3"
                      src={imgHamburguesa3}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                 Carne, queso, jamon, huevo, papa chips
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $20    .000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesa"
                      src={imgHamburguesa}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                       Hamburguesa Koreana
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Carne, queso, jamon, huevo, tomate, cebolla, tocineta
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $20.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesa2"
                      src={imgHamburguesa2}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Mixta
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                     Carne, pollo, queso, jamon, huevo, papa chips
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $20.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHotDog"
                      src={imgHotDog}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                        Salchicha americana
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

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHotDog2"
                      src={imgHotDog2}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                        Salchicha, cerne, pollo, jamon, queso, huevo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $19.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHotDog"
                      src={imgHotDog}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                       Salchicha, camaron, pimenton, queso, jamon, papas a la francesa
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $20.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgSalchipapa3"
                      src={imgSalchipapa3}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Salchipapa Sencilo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Papas a la francesa, salchicha
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $14.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgSalchipollo"
                      src={imgSalchipollo}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Salchipapa Especial
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Papas a la francesa, carne, pollo, jamon, queso
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $25.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgSalchipapa4"
                      src={imgSalchipapa4}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                     Choripapa Especial
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                       Papas a la francesa, carne, pollo, jamon, queso, huevos, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> 25.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgMazorcada1"
                      src={imgMazorcada1}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                   Mazorcada
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, pollo, jamon, queso, papas chips
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $25.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPatacon1"
                      src={imgPatacon1}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Patacon
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, jamon, queso, pollo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $16.000 </strong>
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
          BEBIDAS
        </CardTitle>
        <CardGroup className="container-fluid">
          <Row xs={2} sm={2} md={3} lg={3}>
            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="Card cap"
                      src={ImgGaseosaPersonal}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Gaseosa Personal
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Productos Postobon y Coca Cola
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $2.500 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgGaseosa15LtPostobon"
                      src={imgGaseosa15LtPostobon}
                      width="auto"
                      height="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Gaseosa 1.5 Litros
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Productos Postobon y Coca Cola
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $7.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgGaseosa3LtCoCua"
                      src={imgGaseosa3LtCoCua}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Gaseosa 3 Litros
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Productos Coca - Cola y Postobon
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $10.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgAguaBotella"
                      src={imgAguaBotella}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Agua Sin Gas
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Prodcutos Postobon, Coca Cola y otros.
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $2.500 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgAguaGas"
                      src={imgAguaGas}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Agua Con Gas
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Prodcutos Postobon, Coca Cola y otros.
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $2.500 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgJugos"
                      src={imgJugos}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Vaso de Jugos Naturales En Agua
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Maracuya, lulo, piña, mora, fresas y demas.
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $6.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgJugoJarra"
                      src={imgJugoJarra}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Jarra de Jugos Naturales En Agua
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Maracuya, lulo, piña, mora, fresas y demas.
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

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgCitrica1"
                      src={imgCitrica1}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Vaso De Citrica En Agua
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Limon, hielo, agua y azucar.
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $6.000 </strong>
                      </CardText>

                      <div className="text-center"></div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgCitricaSoda"
                      src={imgCitricaSoda}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Vaso De Citrica En Soda
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Limon, hielo, soda y azucar.
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $7.000 </strong>
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
          Estamos ubicados en
        </CardTitle>
        <div className="py-2">
          <div className="ratio ratio-21x9 ">
            <iframe
              className="rounded-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.1531407011399!2d-72.3918568782444!3d5.330674349613535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0d12bdfbbfeb%3A0x4f2ff066c9f4f056!2sPizeria%20la%2019%20con%2030!5e1!3m2!1ses-419!2sco!4v1725616054148!5m2!1ses-419!2sco"
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
                href="https://www.facebook.com/Pizzeriala19con30/"
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

            <Button color="dark" style={{ margin: 10 }}>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaTiktok style={{ width: 30, height: "auto" }} />
              </a>
            </Button>

          </div>
        </div>
      </Container>
    </>
  );
}
