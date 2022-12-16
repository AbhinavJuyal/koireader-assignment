import { XCircle } from "phosphor-react";

interface IInput {
  decInput: React.MouseEventHandler;
}

const Input = ({ decInput }: IInput) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <input className="px-2 py-2" placeholder="type here!" type="text" />
      <button type="button" onClick={decInput}>
        <XCircle className="text-red-600" size={32} weight="fill" />
      </button>
    </div>
  );
};

export default Input;
