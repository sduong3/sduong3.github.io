import { React, useState } from "react"
import { Link } from "react-router-dom"
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
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
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
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ display: "flex" }}>
      {!open ? (
        <IconButton onClick={handleDrawerOpen}>
          <ChevronRightIcon />
        </IconButton>
      ) : (
        <Drawer
          style={{ width: "240px" }}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
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
      )}
    </div>
  )
}

export default SideDrawer
