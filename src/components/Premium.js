import imgElBuenGusto from "../assets/imgElBuenGusto.jpeg";
import imgYopalExpress from "../assets/imgYopalExpress.jpg";
import imgLaLlamarada from "../assets/imgLaLlamarada.jpg";
import imgTazBurguer from "../assets/imgTazBurguer.jpg";
import { Button } from "reactstrap";

export default function Premium(){
    return(
        <div className="slider">
            <div className="slide-track">
               

                <div className="slide">
                    <h1 className="text-center text-warning">1</h1>
                    <img alt="uno" src={imgYopalExpress} />
                </div>

                <div className="slide">
                    
                <h1 className="text-center text-warning">2</h1>
                    <img alt="uno" src={imgLaLlamarada}/>
                    <br/>
                    <Button color="primary"  className="text-center">Hola</Button>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">3</h1>
                    <img alt="uno" src={imgTazBurguer}/>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">4</h1>
                    <img alt="uno" src={imgElBuenGusto}/>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">5</h1>
                    <img alt="uno" src={imgYopalExpress}/>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">6</h1>
                    <img alt="uno" src={imgLaLlamarada}/>
                </div>


                <div className="slide">
                <h1 className="text-center text-warning">7</h1>
                    <img alt="uno" src={imgElBuenGusto}/>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">8</h1>
                    <img alt="uno" src={imgYopalExpress}/>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">9</h1>
                    <img alt="uno" src={imgLaLlamarada}/>
                </div>

                <div className="slide">
                <h1 className="text-center text-warning">10</h1>
                    <img alt="uno" src={imgTazBurguer}/>
                </div>


                


            </div>


        </div>
    )
}