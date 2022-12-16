import axios from "axios";
import { useEffect, useState } from "react";
import CheckBoxField from "./CheckBoxField";

interface IUser {
  id: number;
  username: string;
  email: string;
  checked: boolean;
}

const parseData = (data: any): IUser[] =>
  data.map(({ username, email, id }: any) => ({
    username,
    email,
    id,
    checked: false,
  }));

const Question4A = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [strike, setStrike] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(parseData(res.data));
      } catch (e) {
        console.error(e);
      }
    };
    fetchUsers();
  }, []);

  const handleClick = (checked: boolean, optionId: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        optionId === user.id ? { ...user, checked } : { ...user }
      )
    );
  };

  return (
    <div className="w-full m-6">
      <div className="mb-4">
        {users && users.length !== 0 ? (
          <div className="">
            {users.map((user) => (
              <CheckBoxField
                key={user.id}
                user={user}
                strike={strike}
                handleClick={handleClick}
              />
            ))}
          </div>
        ) : (
          <div className="">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div>
        <button
          className="block border border-black px-8 py-2 mx-auto"
          type="button"
          onClick={() => setStrike(true)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Question4A;
