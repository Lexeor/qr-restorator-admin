import { Link } from "react-router-dom";

function Public() {
  return (
    <section>
      <h1>Public</h1>
      <Link to="/login">Login</Link>
    </section>
  );
}

export default Public;
