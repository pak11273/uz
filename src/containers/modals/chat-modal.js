import React from "react"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

import {LoadingButton} from "../../components"

export default props => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          By terminating this zone it will no longer exist and will not be
          listed anymore. You will be able to host another zone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="secondary">
          Cancel
        </Button>
        <LoadingButton
          disabled={props.loading}
          loading={props.loading}
          color="secondary"
          variant="contained"
          onClick={props.onLeave}
          autoFocus>
          Terminate
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}
