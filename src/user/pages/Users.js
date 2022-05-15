import React, { PureComponent } from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "001",
      name: "Max Payne",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzM5OTAxYmQtODRkZC00ZGZlLTlhNzYtNzFiODVjMTY4MWU2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
