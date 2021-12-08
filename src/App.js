import { StrictMode } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SearchParams from "./SearchParams.js"
import Details from "./Details.js"


const App = () =>{
  return(
    <div>
      <h1>Adopt Me!</h1>
    <Router>
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
  )
}

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById("root"));


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





