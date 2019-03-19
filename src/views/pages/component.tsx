import * as React from "react"

import { Typography } from "@material-ui/core"

interface Props extends React.Props<{}> {}

const FComponent: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Typography variant="h5" component="h2">
        Home
      </Typography>
      <Typography>Please click 'Todo App' link.</Typography>
    </React.Fragment>
  )
}

export default FComponent
