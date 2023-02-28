import { NavLink } from "react-router-dom";
import i from "../../components/assets/Shahadah-1.svg.png";
import h from "./style.module.scss";
export const Home = () => {
  return (
    <div className={h.home}>
      <img src={i} alt="" />
      <h1>Welcome to Quran App</h1>
      <div className={h.button}>
        <NavLink to="/quron">
          <button>Quron</button>
        </NavLink>
        <NavLink to="/namoz">
          <button>Namoz</button>
        </NavLink>
      </div>
    </div>
  );
};
