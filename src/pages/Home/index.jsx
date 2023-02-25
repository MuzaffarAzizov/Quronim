import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Welcome to Quran App</h1>
      <NavLink to="/quron">
        <button>Quron</button>
      </NavLink>
      <NavLink to="/namoz">
        <button>Namoz</button>
      </NavLink>
    </div>
  );
};
