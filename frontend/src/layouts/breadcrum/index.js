import { Link } from "react-router-dom";

function BreadCrumb(props) {
  return (
    <div className="row">
      <div className="col py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/account">Account</Link>
            </li>
            {props.page && <li className="breadcrumb-item">{props.page}</li>}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
