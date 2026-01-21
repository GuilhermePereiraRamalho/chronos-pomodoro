import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";

export function MainForm() {
  return (
    <form action="" className="form">
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
          In this cycle, <strong>rest</strong> for <strong>25 minutes</strong>.
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
