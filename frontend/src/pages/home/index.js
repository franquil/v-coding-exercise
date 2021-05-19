import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/account">Dashboard</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Home;
