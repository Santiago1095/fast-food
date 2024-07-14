import imgElBuenGusto from "../assets/imgElBuenGusto.jpeg";
import imgYopalExpress from "../assets/imgYopalExpress.jpg";
import imgLaLlamarada from "../assets/imgLaLlamarada.jpg";
import imgTazBurguer from "../assets/imgTazBurguer.jpg";
import { Button, Container } from "reactstrap";

export default function Premium() {
  return (
    <Container fluid >
      <div className="slider bg-primary-subtle rounded-4 container-fluid py-2">
        <div className="slide-track">

          <div className="text-center">
          <div className="slide ms-3">
            <h1 className="text-warning fw-bold rounded-5 ms-5 me-5 bg-dark">1</h1>
            <img alt="uno" src={imgYopalExpress} className="rounded-5 "/>
            <Button outline color="dark" className="fw-bold mt-2 ">
                  Mas info
                </Button>
          </div>
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">2</h1>
            <img alt="uno" src={imgLaLlamarada} />
            <br />
            <div className="text-center">
            <Button color="dark">
                  Mas info
                </Button>

            </div>
           
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">3</h1>
            <img alt="uno" src={imgTazBurguer} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">4</h1>
            <img alt="uno" src={imgElBuenGusto} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">5</h1>
            <img alt="uno" src={imgYopalExpress} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">6</h1>
            <img alt="uno" src={imgLaLlamarada} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">7</h1>
            <img alt="uno" src={imgElBuenGusto} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">8</h1>
            <img alt="uno" src={imgYopalExpress} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">9</h1>
            <img alt="uno" src={imgLaLlamarada} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">10</h1>
            <img alt="uno" src={imgTazBurguer} />
          </div>


          <div className="slide">
            <h1 className="text-center text-warning">1</h1>
            <img alt="uno" src={imgYopalExpress} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">2</h1>
            <img alt="uno" src={imgLaLlamarada} />
            <br />
            <Button color="primary" className="text-center">
              Hola
            </Button>
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">3</h1>
            <img alt="uno" src={imgTazBurguer} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">4</h1>
            <img alt="uno" src={imgElBuenGusto} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">5</h1>
            <img alt="uno" src={imgYopalExpress} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">6</h1>
            <img alt="uno" src={imgLaLlamarada} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">7</h1>
            <img alt="uno" src={imgElBuenGusto} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">8</h1>
            <img alt="uno" src={imgYopalExpress} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">9</h1>
            <img alt="uno" src={imgLaLlamarada} />
          </div>

          <div className="slide">
            <h1 className="text-center text-warning">10</h1>
            <img alt="uno" src={imgTazBurguer} />
          </div>



        </div>
      </div>
    </Container>
  );
}
