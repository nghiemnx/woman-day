import React from "react";
import { useNavigate } from "react-router-dom";
import { pathnames } from "../../config/router";
const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pathnames.welcome);
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <p>Click the button below to navigate to a different page:</p>
      <button onClick={handleClick}>Go to Other Page</button>
    </div>
  );
};

export default AuthPage;
