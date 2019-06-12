import * as React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "../pages"
import Todo from "../pages/todo"

interface MainProps extends React.Props<{}> {}

const FComponent: React.FC<MainProps> = (props: MainProps) => {
  return (
    <Switch>
      {/* Home */}
      <Route exact={true} path="/" render={(_props: any) => <Home {..._props} />} />

      {/* Todo app */}
      <Route exact={true} path="/todo" render={(_props: any) => <Todo {..._props} />} />
    </Switch>
  )
}

export default FComponent
