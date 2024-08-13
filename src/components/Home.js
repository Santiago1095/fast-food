import Cards from "./Cards";
import { Container } from "reactstrap";
import TitleTwho from "./TitleTwo";
import TitleThree from "./TitleThree";
import Premium from "./Premium";

function Home() {
  return (
    <Container fluid>
      <TitleTwho />
      <Premium />
      <TitleThree />
      <Cards />
    </Container>
  );
}

export default Home;
