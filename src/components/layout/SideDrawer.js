import { React, useState } from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import HomeIcon from "@material-ui/icons/Home"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import AppsIcon from "@material-ui/icons/Apps"
import ContactIcon from "@material-ui/icons/ContactMail"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    border: "solid",
    borderColor: "green"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.enteringScreen
    }),
    [theme.breakpoints.down("sm")]: {
      width: 150
    }
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: { textDecoration: "none", color: theme.palette.text.primary }
}))

const navItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentIndIcon />, listText: "Resume", listPath: "/resume" },
  { listIcon: <AppsIcon />, listText: "Projects", listPath: "/projects" },
  { listIcon: <ContactIcon />, listText: "Contact", listPath: "/contact" }
]

const SideDrawer = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navItems.map((item, i) => (
            <ListItem
              button
              key={i}
              to={item.listPath}
              className={classes.link}
              component={Link}
            >
              <ListItemIcon>{item.listIcon}</ListItemIcon>
              <ListItemText primary={item.listText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer
