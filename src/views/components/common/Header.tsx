import * as React from "react"
import { Link } from "react-router-dom"

import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"

interface MainProps extends React.Props<{}> {
  title: string
}

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
})

const FComponent: React.FC<MainProps> = (props: MainProps) => {
  const { title } = props
  const classes = useStyles()

  const [isOpenMenu, setOpenMenu] = React.useState(false)

  const SideList: React.FC = () => (
    <div className={classes.list}>
      <List>
        <Link to="/" className={classes.link}>
          <ListItem button={true} key="Home">
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/todo" className={classes.link}>
          <ListItem button={true} key="Todo App">
            <ListItemText primary="Todo App" />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" onClick={() => setOpenMenu(true)}>
            &#9776;
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side menu */}
      <Drawer open={isOpenMenu} onClose={() => setOpenMenu(false)}>
        <div tabIndex={0} role="button" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
          <SideList />
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default FComponent
