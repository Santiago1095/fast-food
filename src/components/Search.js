import { Container, Input } from "reactstrap";
export default function Search() {
  return (
    <Container fluid className="text-center w-50 py-2">
      <Input
        placeholder="Busca tu comida"
        className="bg-warning text-dark text-center"
      ></Input>
    </Container>
  );
}
