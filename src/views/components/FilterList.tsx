import React from "react"

import { Button, createStyles, Theme, WithStyles, withStyles } from "@material-ui/core"

interface MainProps extends React.Props<{}> {
  visibilityFilter: string
  onFilterClick: (filter: string) => void
}

const muiStyles = (theme: Theme) =>
  createStyles({
    button: {
      marginLeft: 10,
    },
    buttonGroup: {
      marginTop: 10,
      marginBottom: 10,
    },
  })

type Props = MainProps & WithStyles<typeof muiStyles>

const Fcomponent: React.FC<Props> = (props: Props) => {
  const { visibilityFilter, onFilterClick, classes } = props

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

export default withStyles(muiStyles)(Fcomponent)
