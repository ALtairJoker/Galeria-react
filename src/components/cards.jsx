import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ url, titulo, descripcion }) {
  return (
    <Card style={{ width: "40rem" }} className="tarjeta">
      <Card.Img variant="top" src={url} />
      <Card.Body className="cuerpo">
        <Card.Title className="titulo fs-2">{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
