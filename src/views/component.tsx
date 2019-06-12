import * as React from "react"
import { Route } from "react-router"
import { HashRouter as Router } from "react-router-dom"

import CssBaseline from "@material-ui/core/CssBaseline"

import { Header } from "./components/common"
import { Routes } from "./routers"

interface MainProps extends React.Props<{}> {
  title: string
}

const FComponent: React.FC<MainProps> = (props: MainProps) => {
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

export default FComponent
