import { XCircle } from "phosphor-react";

interface IInput {
  input: any;
  decInput: React.MouseEventHandler;
  inputChange: (value: string, id: number) => void;
}

const Input = ({ input, decInput, inputChange }: IInput) => {
  const [id, value] = input;
  const handleOnChange: React.ChangeEventHandler = (e) => {
    const { value, dataset } = e.target as HTMLInputElement;
    const id = dataset.id;
    inputChange(value, Number(id));
  };
  return (
    <div className="flex items-center justify-between mb-2">
      <input
        data-id={id}
        value={value}
        onChange={handleOnChange}
        className="px-2 py-2"
        placeholder="type here!"
        type="text"
      />
      <button type="button" onClick={decInput} data-id={id}>
        <XCircle className="text-red-600" size={32} weight="fill" />
      </button>
    </div>
  );
};

export default Input;
