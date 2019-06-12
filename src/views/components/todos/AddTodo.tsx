import * as React from "react"

import {
  Button,
  createStyles,
  FormControl,
  LinearProgress,
  TextField as MuiTextField,
  Theme,
  WithStyles,
  withStyles,
} from "@material-ui/core"

import { Field, Form, Formik, FormikActions, FormikProps } from "formik"
import { fieldToTextField, TextFieldProps } from "formik-material-ui"
import * as Yup from "yup"

interface MainProps extends React.Props<{}> {
  addTodo: (value: string) => void
}

const muiStyles = (theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(),
      marginRight: theme.spacing(),
      width: 200,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(),
    },
  })

type Props = MainProps & WithStyles<typeof muiStyles>

interface TodoValuesProps {
  todo: string
}

const TodoInitValues: TodoValuesProps = {
  todo: "",
}

const Fcomponent: React.FC<Props> = (props: Props) => {
  const { classes, addTodo } = props

  const TodoSchema = Yup.object().shape({
    todo: Yup.string()
      .max(100, "Too Long!")
      .required("Requied!"),
  })

  const addTodoTextField = (props: TextFieldProps) => <MuiTextField {...fieldToTextField(props)} />

  return (
    <Formik
      initialValues={TodoInitValues}
      validationSchema={TodoSchema}
      onSubmit={(values: TodoValuesProps, formikActions: FormikActions<TodoValuesProps>) => {
        setTimeout(() => {
          formikActions.setSubmitting(false)

          addTodo(values.todo)
          formikActions.resetForm()
        }, 500)
      }}
      render={({ submitForm, isSubmitting, values, setFieldValue }: FormikProps<TodoValuesProps>) => (
        <Form>
          <FormControl margin="normal" required={true} fullWidth={true}>
            <Field name="todo" type="text" label="Todo" component={addTodoTextField} />
          </FormControl>

          {isSubmitting && <LinearProgress />}

          <FormControl margin="normal" required={true} fullWidth={true}>
            <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
              Submit
            </Button>
          </FormControl>
        </Form>
      )}
    />
  )
}

export default withStyles(muiStyles)(Fcomponent)
