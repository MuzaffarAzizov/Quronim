import { NavLink } from "react-router-dom";
import n from "./style.module.scss";
export const Navbar = () => {
  return (
    <div className={n.navbar}>
      <NavLink to="/" className={n.home}>
        Home
      </NavLink>
    </div>
  );
};
