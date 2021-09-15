import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SideDrawer from "./components/layout/SideDrawer"
import {
  Home,
  Resume,
  Projects,
  Contact,
  NotFound
} from "./components/pages/index.js"
import { CssBaseline } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <SideDrawer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
