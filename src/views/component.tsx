import * as React from "react"
import { Route } from "react-router"
import { BrowserRouter } from "react-router-dom"

import {
  AppBar,
  createStyles,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core"

import { Header } from "./components/common"
import { Routes } from "./routers"

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
})

type Props = MainProps & WithStyles<typeof muiStyles>

const FComponent: React.FC<Props> = (props: Props) => {
  const { title, classes } = props

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Header {...props} />
        <main>
          <Route path="/" component={Routes} />

          {/* <Route component={NoMatch}/> */}
        </main>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default withStyles(muiStyles)(FComponent)
