/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Nav;
