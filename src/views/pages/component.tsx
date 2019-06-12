import * as React from "react"

import Typography from "@material-ui/core/Typography"

interface Props extends React.Props<{}> {
  setPageName: (pageName: string) => void
}

const FComponent: React.FC<Props> = (props: Props) => {
  const { setPageName } = props
  const pageName = "Home"

  React.useEffect(() => {
    setPageName(pageName)
  })

  return (
    <React.Fragment>
      <Typography variant="h5" component="h2">
        {pageName}
      </Typography>
      <Typography>Please select "Todo App" from the top left menu icon.</Typography>
    </React.Fragment>
  )
}

export default FComponent
