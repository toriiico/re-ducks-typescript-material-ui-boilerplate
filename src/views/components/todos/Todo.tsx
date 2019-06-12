import * as React from "react"

import { ListItem, ListItemText } from "@material-ui/core"

interface MainProps extends React.Props<{}> {
  onClick: Function
  completed: boolean
  text: string
}

const FComponent: React.FC<MainProps> = (props: MainProps) => {
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

export default FComponent
