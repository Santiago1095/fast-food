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
  
  import imgHamburguesa from "../../assets/imgHamburguesa.png";
  import imgHamburguesa2 from "../../assets/imgHamburguesa2.png";
  import imgHamburguesa3 from "../../assets/imgHamburguesa3.png";
  import imgHotDog from "../../assets/imgHotDog.png";
  import imgHotDog2 from "../../assets/imgHotDog2.png";
  import imgPicada1 from "../../assets/imgPicada1.png";
  import imgNuggest from "../../assets/imgNuggest.png"
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
  
  export default function ElCarriel() {
    return (
      <>
        <div>
          <h1 className="text-dark text-center fw-bold py-2">
            <strong>EL CARRIEL ARROZ PAISA</strong>
          </h1>
          <h3 className="text-dark text-center fw-bold ">
            <strong>Carrera 1A Nº 11 - 11 Barrio por confirmar </strong>
          </h3>
        </div>
  
        <div>
          <h2 className="text-dark text-center fw-bold py-2">
            Realiza tus pedidos al numero
            <a className="" href="tel:+57 3208284736">
              {" 320 828 4736 "}
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
                          Carne, lechuga, tomate, queso, salsas, acompañado con
                          papas a la francesa.
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
                        alt="Card cap"
                        src={imgHamburguesa2}
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
                          Carne, lechuga, tomate, queso, salsas, acompañado con
                          papas a la francesa.
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
                        alt="Card cap"
                        src={imgHamburguesa3}
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
                          Carne, pollo, lechuga, tomate, queso, salsas, acompañado
                          con papas a la francesa.
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
                        alt="Card cap"
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
                          Salchicha americana, queso, salsas, acompañado con papas
                          a la francesa.
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
                          Salchicha americana, tomate, queso, salsas,
                          acompañado con papas a la francesa.
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
                        alt="imgPicada1"
                        src={imgPicada1}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </Col>
  
                    <Col md="6">
                      <CardBody>
                        <CardTitle tag="h5" className="text-start fw-bold py-2">
                          Picadas Personal
                        </CardTitle>
                        <CardSubtitle
                          className="mb-1 text-muted fw-bold"
                          tag="h6"
                        >
                          Carne, pollo, platano, queso, chorizo, ensalada,
                          costilla BBQ, papas.
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
                        alt="imgPicada1"
                        src={imgPicada1}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </Col>
  
                    <Col md="6">
                      <CardBody>
                        <CardTitle tag="h5" className="text-start fw-bold py-2">
                          Picadas 2 Personas
                        </CardTitle>
                        <CardSubtitle
                          className="mb-1 text-muted fw-bold"
                          tag="h6"
                        >
                          Carne, pollo, platano, queso, chorizo, ensalada,
                          costilla BBQ, papas.
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
                        alt="imgPicada1"
                        src={imgPicada1}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </Col>
  
                    <Col md="6">
                      <CardBody>
                        <CardTitle tag="h5" className="text-start fw-bold py-2">
                          Picadas 3 Personas
                        </CardTitle>
                        <CardSubtitle
                          className="mb-1 text-muted fw-bold"
                          tag="h6"
                        >
                          Carne, pollo, platano, queso, chorizo, ensalada,
                          costilla BBQ, papas.
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
                        alt="imgNuggest"
                        src={imgNuggest}
                        width="auto"
                        className="rounded-5 p-2"
                      />
                    </Col>
  
                    <Col md="6">
                      <CardBody>
                        <CardTitle tag="h5" className="text-start fw-bold py-2">
                         Nuggest De Pollo
                        </CardTitle>
                        <CardSubtitle
                          className="mb-1 text-muted fw-bold"
                          tag="h6"
                        >
                          Nuggest de pollo, lechuga, tomate, queso, salsas, acompañado con
                          papas a la francesa.
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
  