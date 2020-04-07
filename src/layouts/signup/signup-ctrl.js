/* eslint react/no-unescaped-entities: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { PureComponent } from "react"

import { Footer } from "../../containers"
import SignupView from "./signup-view.js"
import { cookies } from "brownies"
import { history } from "../../connector"

export default class SignupCtrl extends PureComponent {
  componentDidMount() {
    const token = cookies._uid
    if (token) {
      history.push("/")
    }
  }

  render() {
    return (
      <React.Fragment>
        <SignupView />
        <Footer style={{ width: "100%" }} />
      </React.Fragment>
    )
  }
}
