import * as React from "react"

import Paper from "@material-ui/core/Paper"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import Typography from "@material-ui/core/Typography"

import AddTodo from "../../containers/todos/AddTodo"
import FilterList from "../../containers/todos/FilterList"
import TodoList from "../../containers/todos/TodoList"

interface MainProps extends React.Props<{}> {
  setPageName: (pageName: string) => void
}

const useStyles = () => {
  const theme: Theme = useTheme()

  return makeStyles({
    main: {
      width: "auto",
      display: "block", // Fix IE 11 issue.
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(400 + theme.spacing(6))]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  })()
}

const FComponent: React.FC<MainProps> = (props: MainProps) => {
  const { setPageName } = props
  const classes = useStyles()
  const pageName = "Todos"

  React.useEffect(() => {
    setPageName(pageName)
  })

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Add Todo
        </Typography>
        <AddTodo />
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Todo List
        </Typography>
        <FilterList />
        <TodoList />
      </Paper>
    </div>
  )
}

export default FComponent
