import { Link } from 'react-scroll';

/**
 * Index de navigation latéral (éditorial).
 * sections : [{ name, label }]
 */
const NavIndex = ({ sections }) => (
  <nav className="nav-index" aria-label="Navigation des sections">
    {sections.map((section) => (
      <Link
        key={section.name}
        to={section.name}
        smooth={true}
        duration={600}
        spy={true}
        activeClass="active"
      >
        <span className="txt">{section.label}</span>
        <span className="tick" aria-hidden="true" />
      </Link>
    ))}
  </nav>
);

export default NavIndex;
