import * as React from "react"

import List from "@material-ui/core/List"
import makeStyles from "@material-ui/core/styles/makeStyles"

import { Todo } from "../../../states/ducks/todos/models"
import TodoComponent from "./Todo"

interface MainProps extends React.Props<{}> {
  todos: Todo[]
  onTodoClick: (id: number) => void
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 360,
  },
})

const FComponent: React.FC<MainProps> = (props: MainProps) => {
  const { todos, onTodoClick } = props
  const classes = useStyles()

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

export default FComponent
