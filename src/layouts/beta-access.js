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

import { BETA_ACCESS } from "../graphql/queries/user-queries.js"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { toast } from "react-toastify"
import { withStyles } from "@material-ui/core/styles"

// import {betaAccessSchema} from "@utterzone/common"

const styles = (theme) => ({
  application: {
    color: "yellow",
  },
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

class BetaAccess extends Component {
  state = {
    confirmation:
      "Enter your beta key. Once your key has been verified you will then be able to sign up.",
  }

  render() {
    const { classes } = this.props
    const { confirmation } = this.state
    return (
      <React.Fragment>
        <Container className={classes.root}>
          <Section className={classes.section}>
            <Formik
              validationSchema={betaAccessSchema}
              initialValues={{ key: "" }}
              onSubmit={async (values, actions) => {
                const access = await this.props.client.query({
                  query: BETA_ACCESS,
                  variables: {
                    key: values.key,
                  },
                })

                const result = access.data.betaAccess
                if (result === "access") {
                  this.props.history.push("/signup", {
                    notification: "therecanonlybeone",
                  })
                  actions.setSubmitting(false)
                } else {
                  toast.error("You don't have access.", {
                    className: "toasty",
                    bodyClassName: "toasty-body",
                    hideProgressBar: true,
                  })
                  actions.setSubmitting(false)
                }
              }}
              render={({
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  {process.env.NODE_ENV !== "production" && (
                    <div>
                      <Typography
                        variant="h4"
                        align="center"
                        className={classes.text}
                        gutterBottom
                      >
                        {confirmation}
                      </Typography>
                      <Flex flexdirection="row" justifycontent="center">
                        <Field
                          className={classes.textField}
                          name="key"
                          onChange={handleChange}
                          placeholder="Enter Key"
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
                          Submit
                        </LoadingButton>
                      </Flex>
                    </div>
                  )}
                  {/* <Typography
                    variant="h4"
                    align="center"
                    className={classes.text}
                    gutterBottom>
                    This area will be opened on June 1
                  </Typography> */}
                  <Typography
                    variant="h6"
                    align="center"
                    className={classes.text}
                    style={{ marginTop: "100px" }}
                    gutterBottom
                  >
                    If you want to apply for the next round of beta you can do
                    so{" "}
                    <Button
                      className={classes.application}
                      onClick={() => this.props.history.push("/application")}
                    >
                      here
                    </Button>
                  </Typography>
                </form>
              )}
            />
          </Section>
        </Container>
      </React.Fragment>
    )
  }
}

export default compose(withApollo, withStyles(styles))(BetaAccess)
