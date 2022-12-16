import { useState } from "react";

const Question2 = () => {
  const [show, setShow] = useState<boolean>(true);

  const hideElement: React.MouseEventHandler = (e) => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button className="bg-gray-200 p-2" type="button" onClick={hideElement}>
        Click Me to Hide Element
      </button>
      {show && <div>Toggle Challenge</div>}
    </div>
  );
};

export default Question2;
