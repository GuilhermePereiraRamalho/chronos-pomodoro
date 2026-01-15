import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/gobal.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

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
            <label htmlFor="input">task</label>
            <input type="text" id="input"/>
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
