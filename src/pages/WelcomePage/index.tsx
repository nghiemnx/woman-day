import React from "react";
import { useNavigate } from "react-router-dom";
import { pathnames } from "../../config/router";
const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pathnames.auth);
  };

  return (
    <div>
      <h1>Welcome Page</h1>
      <p>Click the button below to navigate to a different page:</p>
      <button onClick={handleClick}>Go to Other Page</button>
    </div>
  );
};

export default WelcomePage;
