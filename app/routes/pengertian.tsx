import { Link } from "react-router-dom";
import { Container } from "../component/container";

export default function () {
  return (
    <Container>
      <p>Test</p>
      <Link to="/">Home</Link>
    </Container>
  );
}
