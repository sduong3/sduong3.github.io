import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SideDrawer from "./components/layout/SideDrawer"
import Home from "./components/pages/Home"
import Resume from "./components/pages/Resume"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import NotFound from "./components/pages/NotFound"
import { CssBaseline } from "@material-ui/core"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <div style={{ display: "flex" }}>
          <SideDrawer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
