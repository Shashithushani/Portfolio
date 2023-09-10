import { Link } from "react-router-dom";
import linkedin from "../assets/Linkedin.png";
import gitHub from "../assets/GitHub-Logo.png";
import gmail from "../assets/Gmail-logo.png";
function Contact() {
  return (
    <>
      <h4>Contact</h4>

      <div>
        <Link
          to="https://www.linkedin.com/in/shashika-samaradeera-221749272/"
          target="_blank"
        >
          <img src={linkedin} height={60} width={60} />
        </Link>
        <Link to="https://github.com/Shashithushani" target="_blank">
          <img src={gitHub} height={70} width={110} />
        </Link>
        <a href="mailto:thushanishashika23@gmail.com">
          <img src={gmail} height={70} width={90} />
        </a>
      </div>
    </>
  );
}
export default Contact;
