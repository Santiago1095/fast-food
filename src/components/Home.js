import TitleOne from "./TitleOne";
import Cards from "./Cards";
import Cards2 from "./Cards2";

import { Container } from "reactstrap";
import Search from "./Search";
import TitleTwho from "./TitleTwo";
import Slider from "./Slider";
import TitleThree from "./TitleThree";
import Premium from "./Premium";
import ElBuenGusto from "./Restaurants/ElBuenGusto";

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
