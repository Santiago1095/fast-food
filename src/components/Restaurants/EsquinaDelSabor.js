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

import imgHamburgesaSencilla from "../../assets/LaEsquinaDelSabor/imgHamburgesaSencilla.png";
import imgHamburguesaDobleCarne from "../../assets/LaEsquinaDelSabor/imgHamburguesaDobleCarne.png";
import imgLaEncantadora from "../../assets/LaEsquinaDelSabor/imgLaEncantadora.png";
import imgHamburguesaChikenpig from "../../assets/LaEsquinaDelSabor/imgHamburguesaChikenpig.png";
import imgMechiBurguer from "../../assets/LaEsquinaDelSabor/imgMechiBurguer.png";
import imgHamburguesaMixta from "../../assets/LaEsquinaDelSabor/imgHamburguesaMixta.png";
import imgHamburguesaPatacon from "../../assets/LaEsquinaDelSabor/imgHamburguesaPatacon.png";
import imgPerroSencillo from "../../assets/LaEsquinaDelSabor/imgPerroSencillo.png";
import imgMechiPerro from "../../assets/LaEsquinaDelSabor/imgMechiPerro.png";
import imgMechiPerroCombo from "../../assets/LaEsquinaDelSabor/imgMechiPerroCombo.png";
import imgPapaLocaLaChingona from "../../assets/LaEsquinaDelSabor/imgPapaLocaLaChingona.png";
import imgPapaGomela from "../../assets/LaEsquinaDelSabor/imgPapaGomela.png";
import imgPapasMontañeras from "../../assets/LaEsquinaDelSabor/imgPapasMontañeras.png";
import imgPapasPoderosas from "../../assets/LaEsquinaDelSabor/imgPapasPoderosas.png";
import imgPapasFusion from "../../assets/LaEsquinaDelSabor/imgPapasFusion.png";
import imgSalchipapaSencillo from "../../assets/LaEsquinaDelSabor/imgSalchipapaSencillo.png";
import imgSalchipapaLaTremenda from "../../assets/LaEsquinaDelSabor/imgSalchipapaLaTremenda.png";
import imgSalchichicharon from "../../assets/LaEsquinaDelSabor/imgSalchichicharon.png";
import imgPicadaPersonal from "../../assets/LaEsquinaDelSabor/imgPicadaPersonal.png";
import imgPicadaMediana from "../../assets/LaEsquinaDelSabor/imgPicadaMediana.png";
import imgPicadaGrande from "../../assets/LaEsquinaDelSabor/imgPicadaGrande.png";
import imgPicadaXgrande from "../../assets/LaEsquinaDelSabor/imgPicadaXgrande.png";
import imgPicadaBurguer from "../../assets/LaEsquinaDelSabor/imgPicadaBurguer.png";
import imgMazorcada from "../../assets/LaEsquinaDelSabor/imgMazorcada.png";
import imgCostillasBBQ from "../../assets/LaEsquinaDelSabor/imgCostillasBBQ.png";
import imgArrozConPollo from "../../assets/LaEsquinaDelSabor/imgArrozConPollo.png";
import imgChurrasco300Grm from "../../assets/LaEsquinaDelSabor/imgChurrasco300Grm.png";
import imgMiniPaisa from "../../assets/LaEsquinaDelSabor/imgMiniPaisa.png";
import imgAlmuerzos from "../../assets/LaEsquinaDelSabor/imgAlmuerzos.png";
import imgJugos from "../../assets/LaEsquinaDelSabor/imgJugos.png";





import ImgGaseosaPersonal from "../../assets/ImgGaseosaPersonal.png";
import imgGaseosa15LtPostobon from "../../assets/imgGaseosa15LtPostobon.png";
import imgGaseosa3LtCoCua from "../../assets/imgGaseosa3LtCoCua.png";
import imgAguaBotella from "../../assets/imgAguaBotella.png";
import imgAguaGas from "../../assets/imgAguaGas.png";


import imgCervezaAguilaLata from "../../assets/imgCervezaAguilaLata.png";
import imgCervezaCosteñaLata from "../../assets/imgCervezaCosteñaLata.png";
import imgCervezaBudweiserLata269ml from "../../assets/imgCervezaBudweiserLata269ml.png";
import imgCervezaPoker from "../../assets/imgCervezaPoker.png";




import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function EsquinaDelSabor() {
  return (
    <>
      <div>
        <h1 className="text-dark text-center fw-bold py-2">
          <strong>LA ESQUINA DEL SABOR</strong>
        </h1>
        <h3 className="text-dark text-center fw-bold ">
          <strong>Calle 30 Con Callo Seco Esquina Barrio El Gavan</strong>
        </h3>
      </div>

      <div>
        <h2 className="text-dark text-center fw-bold py-2">
          Realiza tus pedidos al numero
          <a className="" href="tel:+57 3202095392">
            {" 322 209 5392 "}
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
          ​​Horario de atención de lunes a domingo de 11:00 - 23:00
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
                      alt="imgHamburgesaSencilla"
                      src={imgHamburgesaSencilla}
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
                        Carne, lechuga, tomate, queso, salsas
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
                      alt="imgHamburguesaDobleCarne"
                      src={imgHamburguesaDobleCarne}
                      width="auto"
                      height="auto"
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
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $15.000 </strong>
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
                      alt="imgLaEncantadora"
                      src={imgLaEncantadora}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $18.000 </strong>
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
                      alt="imgHamburguesaChikenpig"
                      src={imgHamburguesaChikenpig}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                        Carne, lechuga, tomate, queso, salsas, tocineta y maiz
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $21.000 </strong>
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
                      alt="imgMechiBurguer"
                      src={imgMechiBurguer}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa Mechiburguer
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas, tocineta y maiz
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $18.000 </strong>
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
                      alt="imgHamburguesaMixta"
                      src={imgHamburguesaMixta}
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
                        Pollo, lechuga, tomate, queso, salsas.
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
            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgHamburguesaPatacon"
                      src={imgHamburguesaPatacon}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Hamburguesa De Patacon
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Pollo, lechuga, tomate, queso, salsas, tocineta y maiz
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $13.000 </strong>
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
                      alt="imgPerroSencillo"
                      src={imgPerroSencillo}
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
                        Carne, lechuga, tomate, queso, salsas, tocineta.
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $8.000 </strong>
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
                      alt="imgMechiPerro"
                      src={imgMechiPerro}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $15.000 </strong>
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
                      alt="imgMechiPerroCombo"
                      src={imgMechiPerroCombo}
                      width="auto"
                      className="rounded-5 p-2"
                    />
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
                        Carne, lechuga, tomate, queso, salsas
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
                      alt="imgPapaLocaLaChingona"
                      src={imgPapaLocaLaChingona}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Papa Loca La Chingona
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $34.000 </strong>
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
                      alt="imgPapaGomela"
                      src={imgPapaGomela}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Papas Gomelas
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Salchicha americana, papas, queso y salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $30.000 </strong>
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
                      alt="imgPapasMontañeras"
                      src={imgPapasMontañeras}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Papas Montañeras
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Salchicha americana, papas, queso y salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $33.000 </strong>
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
                      alt="imgPapasPoderosas"
                      src={imgPapasPoderosas}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Papas Poderosas
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Salchicha americana, papas, queso y salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $28.000 </strong>
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
                      alt="imgPapasFusion"
                      src={imgPapasFusion}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Papas Fusion
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Salchicha americana, papas, queso y salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $90.000 </strong>
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
                      alt="imgSalchipapaSencillo"
                      src={imgSalchipapaSencillo}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Salchipapas Sencillo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Salchicha americana, pollo, papas, queso y salsas
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
                      alt="imgSalchipapaLaTremenda"
                      src={imgSalchipapaLaTremenda}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Salchipapas La Tremenda
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $37.000 </strong>
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
                      alt="imgSalchichicharon"
                      src={imgSalchichicharon}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Salchichicharon
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $40.000 </strong>
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
                      alt="imgPicadaPersonal"
                      src={imgPicadaPersonal}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Picada Personal
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
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

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgPicadaMediana"
                      src={imgPicadaMediana}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Picada Mediana
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Cerdo, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $23.000 </strong>
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
                      alt="imgPicadaGrande"
                      src={imgPicadaGrande}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Picada Grande
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, pechuga, costilla de cerdo, papas a la francesa y
                        patacon
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $30.000 </strong>
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
                      alt="imgPicadaXgrande"
                      src={imgPicadaXgrande}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Picada X Grande
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Costilla de res, pechuga, papa a la francesa, salchicha
                        y chorizo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $38.000 </strong>
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
                      alt="imgPicadaBurguer"
                      src={imgPicadaBurguer}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Picada Burguer
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Costilla de res, pechuga, papa a la francesa, salchicha
                        y chorizo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $40.000 </strong>
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
                      alt="imgMazorcada"
                      src={imgMazorcada}
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
                        Costilla de res, pechuga, papa a la francesa, salchicha
                        y chorizo
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $17.000 </strong>
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
                      alt="imgCostillasBBQ"
                      src={imgCostillasBBQ}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Costilla BBQ
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $18.000 </strong>
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
                      alt="imgArrozConPollo"
                      src={imgArrozConPollo}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Arroz Con Pollo
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
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

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgChurrasco300Grm"
                      src={imgChurrasco300Grm}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Churrasco 300Grm
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
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
                      alt="imgMiniPaisa"
                      src={imgMiniPaisa}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Mini Paisa
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
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

            <Col className="py-3">
              <Card>
                <Row>
                  <Col md="6">
                    <CardImg
                      alt="imgAlmuerzos"
                      src={imgAlmuerzos}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Almuerzos Caseros
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Carne, lechuga, tomate, queso, salsas
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
                        <strong> $5.500 </strong>
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
                      alt="imgCervezaAguilaLata"
                      src={imgCervezaAguilaLata}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                        Cerveza Aguila
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Cerveza Aguila
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $3.000 </strong>
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
                      alt="imgCervezaCosteñaLata"
                      src={imgCervezaCosteñaLata}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                      Cerveza Costeña
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Cerveza Costeña
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $3.000 </strong>
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
                      alt="imgCervezaPoker"
                      src={imgCervezaPoker}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                      Cerveza Poker
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Cerveza Poker
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $3.000 </strong>
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
                      alt="imgCervezaBudweiserLata269ml"
                      src={imgCervezaBudweiserLata269ml}
                      width="auto"
                      className="rounded-5 p-2"
                    />
                  </Col>

                  <Col md="6">
                    <CardBody>
                      <CardTitle tag="h5" className="text-start fw-bold py-2">
                      Cerveza Budweiser
                      </CardTitle>
                      <CardSubtitle
                        className="mb-1 text-muted fw-bold"
                        tag="h6"
                      >
                        Cerveza Budweiser
                      </CardSubtitle>
                      <CardText className="text-end text-danger fw-bold">
                        {" "}
                        <strong> $3.000 </strong>
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
 