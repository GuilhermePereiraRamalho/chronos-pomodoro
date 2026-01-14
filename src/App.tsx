import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/gobal.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

    </>
  );
}
