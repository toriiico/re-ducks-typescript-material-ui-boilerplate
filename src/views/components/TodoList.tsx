import * as React from "react"

import { createStyles, List, ListItem, ListItemText, Theme, WithStyles, withStyles } from "@material-ui/core"

import { Todo } from "../../states/ducks/todos/models"
import TodoComponent from "./Todo"

interface MainProps extends React.Props<{}> {
  todos: Todo[]
  onTodoClick: (id: number) => void
}

const muiStyles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
    },
  })

type Props = MainProps & WithStyles<typeof muiStyles>

const FComponent: React.FC<Props> = (props: Props) => {
  const { todos, onTodoClick, classes } = props

  return (
    <div className={classes.root}>
      <List>
        {todos.map((todo: Todo) => (
          <TodoComponent key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </List>
    </div>
  )
}

export default withStyles(muiStyles)(FComponent)
