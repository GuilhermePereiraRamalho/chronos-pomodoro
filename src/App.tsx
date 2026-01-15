import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/gobal.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

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
            <DefaultInput
              type="text"
              id="myInput"
              labelText="Task"
              placeholder="type something"
            />
          </div>

          <div className="formRow">
            <p>
              In this cycle, <strong>rest</strong> for{" "}
              <strong>5 minutes</strong>.
            </p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color="green" />
            <DefaultButton icon={<StopCircleIcon/>} color="red" />
          </div>
        </form>
      </Container>
    </>
  );
}
