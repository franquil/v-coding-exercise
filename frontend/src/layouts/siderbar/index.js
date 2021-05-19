import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <nav>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/account">Account</Link>
          </li>
          <li className="list-group-item disabled">
            <Link to="/applications">Applications</Link>
          </li>
          <li className="list-group-item disabled">
            <Link to="/placement">Placement</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
