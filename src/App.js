import { StrictMode, useState } from 'react';
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom"
import Details from "./Details.js"
import SearchParams from "./SearchParams.js"
import ThemeContext from "./ThemeContext";



const App = () =>{

  const theme = useState("darkblue");

  return(
    <ThemeContext.Provider value={theme}>
      <div>
      <Router>
        <header>
          <Link to="/">
          Adopt Me!
          </Link>
        </header>
        <Switch>
            <Route path="/details/:id">
              <Details/>
            </Route>
            <Route path="/">
              <SearchParams/>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

render(<StrictMode><App/></StrictMode>, document.getElementById("root"));


/*const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {id:"my-brand"}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    })
  );
};*/





