import HeaderInterface from "../../interfaces/HeaderInterface";
import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header({ isLoggedIn, handleLogin }: HeaderInterface) {
  const navigate = useNavigate();
  const handleLogIn = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
    handleLogIn();
  };
  return (
    <header className="header">
      <ul className="header__item">
        <li>Logo</li>
        <li>searchBar</li>
      </ul>
      <button onClick={handleLogIn}>{isLoggedIn ? "Logout" : "Login"}</button>
    </header>
  );
}

export default Header;
