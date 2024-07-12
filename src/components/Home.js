import TitleOne from "./TitleOne";
import Cards from "./Cards";
import Cards2 from "./Cards2";


import { Container } from "reactstrap";
import Search from "./Search";
import TitleTwho from "./TitleTwo";
import Slider from "./Slider"

function Home() {
  return (
    <Container fluid>
      
        <TitleOne />
        <Search/>
        <Slider/>
        <TitleTwho/>
        <Cards />
   
     
       
      
    </Container>
  );
}

export default Home;
