import "./styles/theme.css";
import "./styles/gobal.css";

import { Heading } from "./components/Heading";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

    </>
  );
}
