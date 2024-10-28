import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const HomePage = () => {
  const { auth } = React.useContext(AuthContext)!;

  return <div className="text-xl">{auth?.email ? `Hello ${auth.email}` : "Homepage"}</div>;
};

export default HomePage;
