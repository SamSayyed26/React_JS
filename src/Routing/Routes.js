import React, { Suspense, useEffect } from "react";
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";

const LazyComponent = React.lazy(() => import("./lazyComponent"));

export function Home() {
  const navigate = useNavigate();
  const pageLink = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h3>Home Page</h3>
      <p>This is the main Home page</p>

      <Link to="/about">Go To About Page</Link>

      {/* <button onClick={() => navigate("/about")}>Go to About Page</button>
      <button onClick={() => navigate("/filter")}>Go to Filter Page</button> */}

      {/* Dynamic URL */}
      <button onClick={() => pageLink("/about")}>Go to About Page</button>
      <button onClick={() => pageLink("/filter")}>Go to Filter Page</button>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h3>About Page</h3>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h3>Contact Page</h3>
      {/* <Link to="/">Go To Home Page</Link> */}
      <Link to="company">Company</Link>
      <Outlet />
    </div>
  );
}

export function Company() {
  return (
    <div>
      <h3>Welcome To FocusTeck</h3>
      <p>Where Innovation Starts</p>
      <button>Services</button>
    </div>
  );
}

export function Page404() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", fontSize: "2rem" }}>404</h1>
      <h1>Page Not Found</h1>
      <Link to="/">Go To Home page</Link>
    </div>
  );
}

export function DefaultUser() {
  return (
    <div>
      <h3>User Page</h3>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
}

export function Users() {
  const location = useLocation();
  const params = useParams();
  const { name } = params;

  console.log("Location: ", location);
  return (
    <div>
      <h3>{name} Page</h3>
      <p>This is your private page. No one else has access to it</p>
      <Link to="/">Go To Home Page</Link>
      <Link
        to={`/user/${name}`}
        state={{ companyName: "Focusteck", Designation: "Software Engineer" }}
      >
        {name} Page
      </Link>
    </div>
  );
}

export function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [searchAgeParam, setSearchAgeParam] = useSearchParams();
  const userName = searchParam.get("name");
  const userAge = searchAgeParam.get("age");
  return (
    <div className="App">
      <h2>Filter Component</h2>
      <p>User Name: {userName}</p>
      <p>User Age: {userAge}</p>

      <input
        type="text"
        onChange={(e) => setSearchParam({ song: e.target.value })}
        placeholder="Set Song in Query Params"
      />

      <button onClick={() => setSearchAgeParam({ age: 25 })}>
        Set Name in Query Params
      </button>
    </div>
  );
}

export function Login() {
  return (
    <div className="App">
      <h2>Login Page</h2>
      <input type="text" />
      <br />
      <br />
      <input type="text" />
      <br />
      <button>Login</button>
    </div>
  );
}

export function Protected(props) {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let loggedIn = false;
    if (!loggedIn) {
      navigate("login");
    }
  });
  return (
    <div>
      <h2>Protected Route</h2>
      <Component />
    </div>
  );
}

export function LazyRoute() {
  return (
    <Suspense fallback={<h5>Please Wait ...</h5>}>
      <div>
        <h2>LazyLoading Route</h2>
        <LazyComponent />
      </div>
    </Suspense>
  );
}
