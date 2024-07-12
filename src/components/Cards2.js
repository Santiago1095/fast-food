import {
  Row,
  Container,
  Col,
  CardBody,
  CardTitle,
  CardText,
  Card,
  CardSubtitle,
  CardLink,
  Button,
  CardGroup,
  CardImg
} from "reactstrap";
export default function Cards2(){
  return(
    <CardGroup>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
        Nos especialisamos en toda clase de comidas rapidas, bien
        prepadara y con los mejores ingredientes seleccionados        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Hola  Nos especialisamos en toda clase de comidas rapidas, bien
          
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
  </CardGroup>
  )
}