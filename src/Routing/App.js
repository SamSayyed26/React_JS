import {
  Home,
  Contact,
  About,
  Page404,
  Users,
  DefaultUser,
  Company,
  Filter,
  Login,
  Protected,
  LazyRoute,
} from "./Routes";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  //  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ margin: "1em" }}>
      <BrowserRouter>
        <Link style={{ padding: "3em " }} to="/">
          Home
        </Link>
        <Link style={{ padding: "3em " }} to="/about">
          About
        </Link>
        <Link style={{ padding: "3em " }} to="/contact">
          Contact
        </Link>
        <Link style={{ padding: "3em " }} to="/user">
          Users
        </Link>
        <Link style={{ padding: "3em " }} to="/filter">
          Filter
        </Link>
        <Link style={{ padding: "3em " }} to="/login">
          Login
        </Link>
        <Link style={{ padding: "3em " }} to="/lazy">
          Lazy
        </Link>
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/user" element={<DefaultUser />} />
          <Route path="/user/:name" element={<Users />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/lazy" element={<LazyRoute />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <h2> Routes</h2> */}
    </div>
  );
}

export default App;
