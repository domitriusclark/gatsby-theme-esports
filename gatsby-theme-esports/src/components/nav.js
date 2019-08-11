/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav sx={{ background: "background", margin: 0, padding: 0 }}>
      <ul>
        <Link to="/about" sx={{ variant: "textStyles.navLink" }}>
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
