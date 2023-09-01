import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-bar">
          <Link to={"/"}>
            <button>Home</button>
          </Link>

          <Link to={"/about"}>
            <button>About me</button>
          </Link>

          <Link to={"/projects"}>
            <button>My Projects</button>
          </Link>

          <Link to={"/contact"}>
            <button>Contact</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
