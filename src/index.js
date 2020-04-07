import "./assets/css/global-styles.js"

import { Footer, MainNavbar } from "./containers"
import { Grid, Section } from "./components"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import { ApolloInstance } from "./apollo.js"
import { ApolloProvider } from "react-apollo"
import App from "./App.js"
import { AppContainer } from "react-hot-loader"
import CssBaseline from "@material-ui/core/CssBaseline"
import NavbarSpacer from "./components/spacers/spacer-navbar.js"
import ReactGA from "react-ga"
import { ToastContainer } from "react-toastify"
import blue from "@material-ui/core/colors/blue"
/* import FlashMessagesList from "./components/flashmessages/flashmessages-list" */
// import { history } from "./connector"
import red from "@material-ui/core/colors/red"
import { render } from "react-dom"
import { routes } from "./routes"
import { session } from "brownies"
import styled from "styled-components"
import yellow from "@material-ui/core/colors/yellow"

// import { persistor, store } from "./store.js"

const SubRoutes = (route) => (
  <Route
    path={route.path}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
)

// Material UI Theme
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: yellow,
    secondary: blue,
    error: red,
  },
  status: {
    danger: red,
    warning: "orange",
  },
})

const StyledGrid = styled(Grid)`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "navBar"
    "flash"
    "content"
    "footer";
  margin: 0 auto;
`

// google analytics
ReactGA.initialize("UA-125119993-1")
ReactGA.pageview(window.location.pathname + window.location.search)

// wrapped in AppContainer for react-hot-loader

render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
  })
}
