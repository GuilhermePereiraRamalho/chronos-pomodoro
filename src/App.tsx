import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/gobal.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput type="text" id="myInput" />
          </div>

          <div className="formRow">
            <p>
              In this cycle, <strong>rest</strong> for <strong>5 minutes</strong>.
            </p>
          </div>

          <div className="formRow">
            <p>Cycles</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Send</button>
          </div>
        </form>
      </Container>

    </>
  );
}
