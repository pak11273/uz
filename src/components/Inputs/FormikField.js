import { Field, getIn } from "formik"
/* eslint no-unused-vars: 0 */
import React, { useState } from "react"

import Loadable from "react-loadable"
import Loading from "../loaders/layout-loader.js"
import Select from "react-select"
import TextField from "@material-ui/core/TextField"
import isEmpty from "lodash/isEmpty"

const MTableEditField = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'material-table-edit-row' */ "material-table"
    ).then((mod) => mod.MTableEditField),
  loading: Loading,
  delay: 200,
})

export const FormikInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <TextField
      fullWidth
      {...field}
      {...props}
      margin="normal"
      variant="outlined"
      error={!isEmpty(errors[field.name])}
    />
    {errors[field.name] && touched[field.name] && (
      <div style={{ color: "#f44336" }}>{errors[field.name]}</div>
    )}
  </div>
)

export const FormikTextArea = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <TextField
      id="outlined-multiline-static"
      multiline
      rows="8"
      fullWidth
      margin="normal"
      variant="outlined"
      {...field}
      {...props}
      error={!isEmpty(errors[field.name])}
    />
    {errors[field.name] && touched[field.name] && (
      <div style={{ color: "#f44336" }}>{errors[field.name]}</div>
    )}
  </div>
)

export const FormikSelect = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const { options } = props
  const [disabled, setDisabled] = useState(false)
  const [searchable, setSearchable] = useState(props.searchable)
  const [selectValue, setSelectValue] = useState("")
  const [clearable, setClearable] = useState(true)
  const [rtl] = useState(false)
  const updateValue = (newValue) => {
    setSelectValue(newValue)
    props.setFieldValue(field.name, newValue.value)
  }
  return (
    <div>
      <Select
        {...field}
        {...props}
        id="select"
        ref={(ref) => {
          props.select = ref
        }}
        onBlurResetsInput={false}
        onSelectResetsInput={false}
        required
        simpleValue
        clearable={clearable}
        wrapperStyle={{
          margin: "20px 0 0 0",
          width: "100%",
        }}
        style={{
          width: "100%",
        }}
        menuContainerStyle={{
          width: "100%",
        }}
        menuStyle={{
          width: "100%",
        }}
        name={field.name}
        options={options}
        disabled={disabled}
        value={selectValue}
        onChange={updateValue}
        rtl={rtl}
        searchable={searchable}
      />
      {errors[field.name] && touched[field.name] && (
        <div style={{ color: "#f44336", padding: "10px" }}>
          {errors[field.name]}
        </div>
      )}
    </div>
  )
}

export const FormikMTInput = (props) => (
  <Field
    name={props.columnDef.field}
    render={({ field, form }) => {
      const { name } = field
      const { errors, setFieldValue } = form

      const showError = !!getIn(errors, name)

      return (
        <div>
          <MTableEditField
            {...props}
            {...field}
            error={showError}
            onChange={(newValue) => setFieldValue(name, newValue)}
          />
          {errors[field.name] && (
            <div style={{ color: "#f44336" }}>{errors[field.name]}</div>
          )}
        </div>
      )
    }}
  />
)
