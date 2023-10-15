import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="space-x-8 text-xl font-semibold m-14">
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-green-700 text-white px-4 py-2" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-green-700 text-white px-4 py-2" : ""
        }
        to="/coffees/new"
      >
        Add Coffee
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-green-700 text-white px-4 py-2" : ""
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-green-700 text-white px-4 py-2" : ""
        }
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default NavBar;
