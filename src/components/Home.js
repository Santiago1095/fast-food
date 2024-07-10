import TitleOne from "./TitleOne";
import Cards from "./Cards";
import Cards2 from "./Cards2";


import { Container } from "reactstrap";
import Search from "./Search";

function Home() {
  return (
    <Container fluid>
      
        <TitleOne />
        <Search/>
        <Cards />
        <Cards2/>
      
    </Container>
  );
}

export default Home;
