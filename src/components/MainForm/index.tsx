
import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import type { HomeProps } from "../../pages/Home";


export function MainForm({state, setState}: HomeProps) {
  function handleClick(){
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formatedSecondsRemaining: '23:34'
      }
    })
  }
  return (
    <form action="" className="form">
      <div>
        <button type="button" onClick={handleClick}>Click</button>
      </div>
      <div className="formRow">
        <DefaultInput
          type="text"
          id="myInput"
          labelText="task"
          placeholder="type something"
        />
      </div>

      <div className="formRow">
        <p>
          In this cycle, <strong>rest</strong> for <strong>{state.config.workTime} minutes</strong>.
        </p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
