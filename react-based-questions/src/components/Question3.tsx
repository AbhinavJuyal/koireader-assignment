import { PlusCircle, XCircle } from "phosphor-react";
import { useState } from "react";
import Input from "./Input";

const maxInputs: number = 10;
const minInputs: number = 0;

const Question3 = () => {
  const [totalInputs, setTotalInputs] = useState<number>(minInputs);

  const incInput: React.MouseEventHandler = () =>
    setTotalInputs((prev) => (prev + 1 <= maxInputs ? prev + 1 : prev));

  const decInput: React.MouseEventHandler = () =>
    setTotalInputs((prev) => (prev - 1 >= minInputs ? prev - 1 : prev));

  return (
    <div className="max-w-[250px]">
      <div className="flex items-center justify-between border-b border-b-black mb-4">
        <p className="mr-4">Append a new input field</p>
        <button type="button" onClick={incInput}>
          <PlusCircle className="text-blue-600" size={32} weight="fill" />
        </button>
      </div>
      <div className="">
        {new Array(totalInputs).fill(0).map((e, idx) => (
          <Input key={idx} decInput={decInput} />
        ))}
      </div>
    </div>
  );
};

export default Question3;
