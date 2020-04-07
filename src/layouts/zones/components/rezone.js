import { Field, withFormik } from "formik"
/* import cuid from "cuid" */
// import {rezoneSchema} from "@utterzone/common"
import { FormikInput, LoadingButton } from "../../../components"
import {
  GET_LEVEL,
  GET_LEVELS,
} from "../../../graphql/queries/level-queries.js"
import { compose, withApollo } from "react-apollo"

import Grid from "@material-ui/core/Grid"
import { REZONE } from "../../../graphql/queries/zone-queries.js"
import React from "react"
import Typography from "@material-ui/core/Typography"
import { session } from "brownies"
import { styles } from "../styles.js"
import { toast } from "react-toastify"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

const Rezone = (props) => {
  const { classes, handleSubmit, isSubmitting } = props

  return (
    <React.Fragment>
      <form className={classes.rootZoneCreate} onSubmit={handleSubmit}>
        <div className={classes.heroUnitZoneCreate}>
          <div className={classes.heroContentZoneCreate}>
            <Grid container justify="center" direction="column">
              <Typography
                align="center"
                variant="h4"
                className={classes.heading}
                gutterBottom
              >
                Are you currently hosting a Zone?
              </Typography>
              <Typography
                align="center"
                variant="h6"
                className={classes.subHeading}
                style={{ color: "white" }}
                gutterBottom
              >
                If you lost connection to your zone you can get back to it from
                here. If you would like to destroy your zone you can do so once
                you are back inside the zone.
              </Typography>
            </Grid>
          </div>
        </div>
        <main className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography
                align="left"
                variant="h6"
                className={classes.subHeading}
                gutterBottom
              >
                Enter your username
              </Typography>
              <Field
                fullWidth
                id="outlined-search"
                name="username"
                label="username"
                type="text"
                className={classes.searchField}
                component={FormikInput}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} align="center">
              <LoadingButton
                variant="contained"
                color="secondary"
                type="submit"
                size="large"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                ReHost Zone
              </LoadingButton>
            </Grid>
          </Grid>
        </main>
      </form>
    </React.Fragment>
  )
}

export default compose(
  withApollo,
  withRouter,
  withFormik({
    validationSchema: rezoneSchema,
    validateOnChange: false,
    validateOnBlur: false,
    mapPropsToValues: () => ({
      owner: session.user._id,
      username: "",
    }),
    handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
      const onComplete = (zone, courseLevel, courseLevels) => {
        // rehydrate levels and vocabulary
        session.levels = courseLevels.data.getLevels.levels
        session.vocabulary = courseLevel.data.getLevel.vocabulary
        session.modifier =
          courseLevels.data.getLevels.levels[session.level - 1].modifier
        props.history.push({
          pathname: `/zone/${zone.data.rezone._id}`,
          state: {
            zoneId: zone.data.rezone._id,
            zoneName: zone.data.rezone.zoneName,
          },
        })
      }
      try {
        const zone = await props.client.query({
          query: REZONE,
          variables: {
            username: values.username,
          },
        })

        // rehydrate zone
        session.zone = zone.data.rezone
        session.level = zone.data.rezone.courseLevel

        // if zone is legit
        if (zone) {
          const courseLevels = await props.client.query({
            fetchPolicy: "network-only",
            query: GET_LEVELS,
            variables: {
              courseId: zone.data.rezone.course._id,
            },
          })

          const courseLevel = await props.client.query({
            query: GET_LEVEL,
            variables: {
              levelId:
                courseLevels.data.getLevels.levels[session.level - 1]._id,
            },
          })

          onComplete(zone, courseLevel, courseLevels)
        } else {
          setErrors(zone.REZONE.errors)
          toast.success("Could not create a zone, please try again.", {
            className: "toasty",
            bodyClassName: "toasty-body",
            hideProgressBar: true,
          })
        }
      } catch (err) {
        console.log("err: ", err)
        /* console.error("TEST ERR =>", err.graphQLErrors.map(x => x.message)) */
        const msg = err.message.replace("GraphQL error:", "").trim()
        if (err.message.indexOf("You can only host") !== -1) {
          toast.warn(msg, {
            className: "toasty",
            bodyClassName: "toasty-body",
            hideProgressBar: true,
          })
        }

        setSubmitting(false)
        return null
      }
    },
  }),
  withStyles(styles)
)(Rezone)
