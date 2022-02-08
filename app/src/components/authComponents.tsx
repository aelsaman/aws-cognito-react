import React from 'react'

import TextField from '@material-ui/core/TextField'

export const Email: React.FunctionComponent<{ emailIsValid: boolean; setEmail: (_: string) => void }> = ({
  emailIsValid,
  setEmail,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={emailIsValid ? 'Email' : 'Invalid Email'}
      error={!emailIsValid}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(evt.target.value)
      }}
    />
  )
}

export const PhoneNumber: React.FunctionComponent<{ phoneNumberIsValid: boolean; setPhoneNumber: (_: string) => void }> = ({
  phoneNumberIsValid,
  setPhoneNumber,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={phoneNumberIsValid ? 'Phone' : 'Invalid Phone'}
      error={!phoneNumberIsValid}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPhoneNumber(evt.target.value)
      }}
    />
  )
}

export const Password: React.FunctionComponent<{
  label: string
  passwordIsValid: boolean
  setPassword: (_: string) => void
}> = ({ label, passwordIsValid, setPassword }) => {
  return (
    <TextField
      fullWidth
      type="password"
      variant="outlined"
      label={passwordIsValid ? label : 'Minimum 4 characters'}
      error={!passwordIsValid}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPassword(evt.target.value)
      }}
    />
  )
}

export const GivenName: React.FunctionComponent<{ givenNameIsValid: boolean; setGivenName: (_: string) => void }> = ({
  givenNameIsValid,
  setGivenName,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={givenNameIsValid ? 'Given Name' : 'Minimum 4 characters'}
      error={!givenNameIsValid}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGivenName(evt.target.value)
      }}
    />
  )
}

export const FamilyName: React.FunctionComponent<{ familyNameIsValid: boolean; setFamilyName: (_: string) => void }> = ({
  familyNameIsValid,
  setFamilyName,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={familyNameIsValid ? 'Family Name' : 'Minimum 5 characters'}
      error={!familyNameIsValid}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFamilyName(evt.target.value)
      }}
    />
  )
}

export const Code: React.FunctionComponent<{ codeIsValid: boolean; setCode: (_: string) => void }> = ({
  codeIsValid,
  setCode,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={codeIsValid ? 'Code' : 'Minimum 6 characters'}
      error={!codeIsValid}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(evt.target.value)
      }}
    />
  )
}
