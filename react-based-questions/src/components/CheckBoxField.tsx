interface ICheckBoxField {
  user: {
    id: number;
    username: string;
    email: string;
    checked: boolean;
  };
  strike: boolean;
  handleClick: (checked: boolean, optionId: number) => void;
}

const CheckBoxField = ({ user, strike, handleClick }: ICheckBoxField) => {
  const { username, email, checked, id } = user;

  const changeOption: React.MouseEventHandler = (e) =>
    handleClick((e.target as HTMLInputElement).checked, id);

  return (
    <div className="flex items-center">
      <input
        id={String(id)}
        className="mr-2"
        type="checkbox"
        checked={checked}
        onClick={changeOption}
      />
      <label
        htmlFor={String(id)}
        className={strike && checked ? "line-through" : ""}
      >
        {username} - {email}
      </label>
    </div>
  );
};

export default CheckBoxField;
