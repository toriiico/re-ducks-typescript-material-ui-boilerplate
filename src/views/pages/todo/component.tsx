import * as React from "react"

import { Button, createStyles, Paper, TextField, Theme, Typography, WithStyles, withStyles } from "@material-ui/core"

import AddTodo from "../../components/AddTodo"
import FilterList from "../../components/FilterList"
import TodoList from "../../components/TodoList"

interface MainProps extends React.Props<{}> {
  // AddTodo
  addTodo: (text: string) => void
  // TodoList
  todos: any
  onTodoClick: (id: number) => void
  // FilterList
  active: boolean
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const muiStyles = (theme: Theme) =>
  createStyles({
    main: {
      width: "auto",
      display: "block", // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
  })

type Props = MainProps & WithStyles<typeof muiStyles>

const FComponent: React.FC<Props> = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Todo App
        </Typography>
        <AddTodo addTodo={props.addTodo} />
        <TodoList {...props} />
        <FilterList {...props} />
      </Paper>
    </div>
  )
}

export default withStyles(muiStyles)(FComponent)
