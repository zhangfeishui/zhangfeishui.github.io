import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./components/header.css"
import "./components/layout.css"
import Wiki from "./wiki"
import WebComponents from "./pages/webcomponents/webcomponents"
import NestingExample from "./pages/example"



const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  { path: "/workings", main: () => <NestingExample></NestingExample> },
  { path: "/writings", main: () => <WebComponents /> },
  { path: "/wiki", main: () => <Wiki /> },
  { path: "/aa", main: () => <h2>bbbb</h2> },
];

function App() {
  return (
    <Router>
      <body>
        <div className="Header">
          <Link id="shouye" to="/">首页</Link>
          <div>
            <Link id="wiki" to="/wiki">IXD-wiki</Link>
            <Link id="workings" to="/workings">workings</Link>
            <Link id="writtings" to="/writings">writtings</Link>
          </div>

        </div>
        <div class="section">
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </body>
    </Router>
  );
}

export default App;
