import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <div className="contenedorFooter" >
    <hr/> 
      <h1 className="footer">Todos los derechos reservados</h1>
      <h3>
        Para mas imagenes ingresar a{" "}
        <a href="https://www.instagram.com/alexis_altair/">
          <Button variant="primary">
            Instagram <Badge bg="secondary">Alexis_Altair</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </a>{" "}
      </h3>
    </div>
  );
}
