import { Link } from "react-router-dom";
import { Button, Container, ButtonGroup } from "reactstrap";

export default function Footer() {
  return (
    <Container className="text-center">
      <p className="text-center py-2">
        Comida rapidas en yopal, todos Los Derechos Reservados.
      </p>
      <div className="text-end">
        <Link to="/nosotros">Acerca de nosotros</Link>
      </div>
<div className="text-end">
<Link to="/nosotros" >Quiero que mi restaurante este en la pagina</Link>
</div>

     
      <div className="py-3"> </div>
    </Container>
  );
}
