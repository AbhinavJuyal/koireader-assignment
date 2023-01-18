import { PlusCircle, XCircle } from "phosphor-react";
import { useState } from "react";
import Input from "./Input";

const maxInputs: number = 10;
const minInputs: number = 0;

const obj = [
  {
    id: 1,
    value: "",
  },
  {
    id: 2,
    value: "",
  },
  {
    id: 3,
    value: "",
  },
  {
    id: 4,
    value: "",
  },
  {
    id: 5,
    value: "",
  },
];

const obj1: Record<string, string> = {
  1: "",
  2: "",
  3: "",
  4: "",
};

const randomize = () => Math.floor(Math.random() * 1000);

const Question3 = () => {
  const [totalInputs, setTotalInputs] = useState<number>(minInputs);
  const [formData, setFormData] = useState(obj1);

  // const incInput: React.MouseEventHandler = () =>
  //   setTotalInputs((prev) => (prev + 1 <= maxInputs ? prev + 1 : prev));

  // const decInput: React.MouseEventHandler = () =>
  //   setTotalInputs((prev) => (prev - 1 >= minInputs ? prev - 1 : prev));

  const incInput: React.MouseEventHandler = (e) => {
    setFormData((prev) => ({ ...prev, [randomize()]: "" }));
  };

  const decInput: React.MouseEventHandler = (e) => {
    const { dataset } = e.currentTarget as HTMLButtonElement;
    const id = dataset.id as string;
    setFormData((prev) => {
      const newObj = { ...prev };
      delete newObj[id];
      console.log(newObj);
      return newObj;
    });
  };

  const inputChange = (value: string, id: number) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-[250px]">
      <div className="flex items-center justify-between border-b border-b-black mb-4">
        <p className="mr-4">Append a new input field</p>
        <button type="button" onClick={incInput}>
          <PlusCircle className="text-blue-600" size={32} weight="fill" />
        </button>
      </div>
      <div className="">
        {Object.entries(formData).map((input, idx) => (
          <Input
            key={idx}
            input={input}
            decInput={decInput}
            inputChange={inputChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Question3;
