import React, { useEffect, useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка получения пользователей");
      })
      .finally(() => setLoading(false));
  }, []);

  const onClickInvites = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((idInvite) => idInvite !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onCliclSuccess = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isLoading={isLoading}
          items={users}
          onClickInvites={onClickInvites}
          invites={invites}
          onCliclSuccess={onCliclSuccess}
        />
      )}
    </div>
  );
}

export default App;
