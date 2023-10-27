import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            I'm baby artisan irony fam, pabst plaid mlkshk beard offal cred next
            level migas venmo bicycle rights raw denim art party. Cold-pressed
            poke fixie, raw denim humblebrag echo park yr retro. Authentic palo
            santo neutral milk hotel lomo. Keffiyeh grailed cliche, waistcoat
            meggings distillery semiotics pop-up solarpunk scenester bushwick
            swag hashtag you probably haven't heard of them food truck. Fixie
            taiyaki dreamcatcher coloring book tousled pop-up. Before they sold
            out kogi tbh coloring book distillery Brooklyn post-ironic cliche
            narwhal stumptown yr bespoke 8-bit. Chambray normcore sus messenger
            bag, green juice yes plz gorpcore pork belly
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="Road image" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
