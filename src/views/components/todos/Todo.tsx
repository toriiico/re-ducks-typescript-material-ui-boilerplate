import * as React from "react"

import { createStyles, ListItem, ListItemText, Theme, WithStyles, withStyles } from "@material-ui/core"

interface MainProps extends React.Props<{}> {
  onClick: Function
  completed: boolean
  text: string
}

const muiStyles = (theme: Theme) => createStyles({})

type Props = MainProps & WithStyles<typeof muiStyles>

const FComponent: React.FC<Props> = (props: Props) => {
  const { onClick, completed, text } = props

  return (
    <ListItem
      button={true}
      onClick={() => onClick()}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <ListItemText primary={`🔴 ${text}`} />
    </ListItem>
  )
}

export default withStyles(muiStyles)(FComponent)
