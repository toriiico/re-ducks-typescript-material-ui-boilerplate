import React from "react"

import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"

interface MainProps extends React.Props<{}> {
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const useStyles = makeStyles({
  button: {
    marginLeft: 10,
  },
  buttonGroup: {
    marginTop: 10,
    marginBottom: 10,
  },
})

const Fcomponent: React.FC<MainProps> = (props: MainProps) => {
  const { visibilityFilter, onFilterClick } = props
  const classes = useStyles()

  const FilterLink = (filter: string, text: string) => {
    if (visibilityFilter === filter) {
      return (
        <Button className={classes.button} disabled={true} color="secondary" variant="contained">
          {text}
        </Button>
      )
    }

    return (
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={(e: any) => {
          e.preventDefault()
          onFilterClick(filter)
        }}
      >
        {text}
      </Button>
    )
  }

  return (
    <div className={classes.buttonGroup}>
      {FilterLink("SHOW_ALL", "All")}
      {FilterLink("SHOW_ACTIVE", "Active")}
      {FilterLink("SHOW_COMPLETED", "Completed")}
    </div>
  )
}

export default Fcomponent
