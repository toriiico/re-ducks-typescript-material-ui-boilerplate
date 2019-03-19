import * as React from "react"
import { Link } from "react-router-dom"

import {
  AppBar,
  createStyles,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core"

interface MainProps extends React.Props<{}> {
  title: string
}

const muiStyles = createStyles({
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

type Props = MainProps & WithStyles<typeof muiStyles>

const FComponent: React.FC<Props> = (props: Props) => {
  const { title, classes } = props

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

export default withStyles(muiStyles)(FComponent)
