/* import gql from "graphql-tag" */
import {
  Container,
  Flex,
  FormikInput,
  LoadingButton,
  Section,
} from "../components"
import { Field, Formik } from "formik"
import React, { Component } from "react"
import { compose, withApollo } from "react-apollo"

import { RENEW_CONFIRAMTION } from "../graphql/mutations/user-mutations.js"
import Typography from "@material-ui/core/Typography"
import { toast } from "react-toastify"
import { withStyles } from "@material-ui/core/styles"

// import {renewConfirmationSchema} from "@utterzone/common"

const styles = (theme) => ({
  button: {
    margin: "30px",
  },
  root: {
    backgroundColor: "black",
    height: "100%",
  },
  text: {
    color: "white",
  },
  textField: {
    margin: "18px",
    background: "white",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  masthead: {
    padding: theme.spacing.unit * 1,
    margin: "auto",
    maxWidth: 900,
    [`@media (max-width:770px)`]: {
      flexDirection: "column",
    },
  },
  section: {
    padding: theme.spacing.unit * 1,
    height: "100vh",
    maxWidth: 900,
    [`@media (max-width:770px)`]: {
      flexDirection: "column",
    },
  },
})

class ConfirmEmail extends Component {
  state = {
    confirmation:
      "We need to confirm your email address.  Did you lose your confirmation email?  We can send you another one.",
  }

  render() {
    const { classes } = this.props
    const { confirmation } = this.state
    return (
      <React.Fragment>
        <Container className={classes.root}>
          <Section className={classes.section}>
            <Formik
              validationSchema={renewConfirmationSchema}
              initialValues={{ email: "" }}
              onSubmit={async (values, actions) => {
                const result = await this.props.client.mutate({
                  mutation: RENEW_CONFIRAMTION,
                  variables: {
                    email: values.email,
                  },
                })

                if (result.data.errors) {
                  toast.error(result.data.errors[0].message, {
                    className: "toasty",
                    bodyClassName: "toasty-body",
                    hideProgressBar: true,
                  })
                  actions.setSubmitting(false)
                  return
                }

                if (result.data.renewConfirmation) {
                  setTimeout(() => {
                    actions.setSubmitting(false)
                    toast.success("A confirmation email has been sent.", {
                      className: "toasty",
                      bodyClassName: "toasty-body",
                      hideProgressBar: true,
                    })
                    actions.resetForm()
                  }, 3000)
                  return
                }

                toast.error("No email on file with that address.", {
                  className: "toasty",
                  bodyClassName: "toasty-body",
                  hideProgressBar: true,
                })

                setTimeout(() => {
                  actions.setSubmitting(false)
                }, 3000)
              }}
              render={({
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Typography
                    variant="h6"
                    align="center"
                    className={classes.text}
                    gutterBottom
                  >
                    {confirmation}
                  </Typography>
                  <Flex flexdirection="row" justifycontent="center">
                    <Field
                      className={classes.textField}
                      name="email"
                      onChange={handleChange}
                      placeholder="email address"
                      component={FormikInput}
                    />
                    {errors.name && <div id="feedback">{errors.name}</div>}
                    <LoadingButton
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      className={classes.button}
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Send
                    </LoadingButton>
                  </Flex>
                </form>
              )}
            />
          </Section>
        </Container>
      </React.Fragment>
    )
  }
}

export default compose(withApollo, withStyles(styles))(ConfirmEmail)
