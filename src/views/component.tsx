import * as React from "react"
import { Route } from "react-router"
import { HashRouter as Router } from "react-router-dom"

import { createStyles, CssBaseline, WithStyles, withStyles } from "@material-ui/core"

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
  const { title } = props

  React.useEffect(() => {
    document.title = title
  }, [title])

  // NOTE: Router has no problem with replace to BrowserRouter.
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header title={title} />
        <main>
          <Route path="/" component={Routes} />

          {/* <Route component={NoMatch}/> */}
        </main>
      </React.Fragment>
    </Router>
  )
}

export default withStyles(muiStyles)(FComponent)
