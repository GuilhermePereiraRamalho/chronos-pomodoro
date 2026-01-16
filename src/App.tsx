import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/gobal.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { useState } from "react";

export function App() {
  // const [number, setNumber] = useState(() => {
  //   console.log("Laze initialization");
  //   return 0;
  // });

  const [number, setNumber] = useState(0)

  function handleClick() {
    setNumber(prevState => prevState + 1);
  }

  return (
    <>
      <Heading>
        Number: {number}
      </Heading>
      <button onClick={handleClick}>Increase</button>
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
              labelText={number.toString()}
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
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
