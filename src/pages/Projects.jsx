import img from "../assets/bear.png";
import { Link } from "react-router-dom";
import image from "../assets/hotel.jpg";
import foot from "../assets/foot-cartoon.jpg";
function Projects() {
  return (
    <>
      <h1>My Projects</h1>

      <div className="card">
        <h4>3rd Feet</h4>
        <img className="images" src={foot} height={200} width={200} />
        <p>
          3rd Feet is an online second-hand webshop. This is a fullstack
          project. 3rd Feet is created by using GitHub, Axios, JSON Web Token
          (JWT), Cloudinary, JavaScript, MongoDB, Express.js, React.js, Node.js,
          Mongoose, Git
        </p>
        <Link to="https://poetic-conkies-880cc5.netlify.app/">
          <button>View</button>{" "}
        </Link>
      </div>

      <div className="card">
        <h4>Stay-With-Me</h4>
        <img className="images" src={image} height={200} width={200} />
        <p>
          Built on Express.js and EJS templating, using Node.js. This project is
          about reserve a hotel. The site uses routes for letting the user have
          authorized access, search for their desired destination and book one
          of the available hotels. This project is created by using GitHub
          ,JavaScript, Express.js, Node.js, Back-End Web Development, CRUD, ejs,
          Mongoose, Cookies, Session, Auth. operations.
        </p>
        <Link to="https://stay-with-me.adaptable.app/">
          <button>View</button>
        </Link>
      </div>
      <div className="card">
        <h4>Collecting-Coins</h4>
        <img className="images" src={img} height={200} width={200} />
        <p>
          This is a simple game developed by using fundamental technologies such
          as JavaScript, HTML, and CSS, the game operates through DOM
          manipulation and object-oriented programming principles.{" "}
        </p>
        <Link to="https://shashithushani.github.io/Collecting-Coins/">
          <button>Play</button>
        </Link>
      </div>
    </>
  );
}
export default Projects;
