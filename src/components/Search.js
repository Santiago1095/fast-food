import {
  Container,
  Input,
  CardBody,
  Button,
  Collapse,
  Alert,
  UncontrolledCollapse,
  Card,
  ButtonGroup,
} from "reactstrap";
export default function Search() {
  return (
    <div className=" text-center">
      <Button
        className="bg-warning  text-center fw-bold border-dark text-dark"
        color="primary"
        id="toggler"
        style={{
          marginBottom: "1rem",
        }}
      >
        Categorias
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            <ButtonGroup>
              <Button
                href="/categorias/comidas-rapidas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warning  fw-bold d-grid "
              >
                Comidas Rapidas
              </Button>

              <Button
                href="/categorias/comidas-mexicanas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary  fw-bold d-grid "
              >
                Comidas Mexicanas
              </Button>

              <Button
                href="/categorias/comidas-tradicionales"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-danger  fw-bold d-grid "
              >
               Comidas Tradicionales
              </Button>

              <Button
                href="/categorias/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary  fw-bold d-grid "
              >
                Ver Mas
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}
