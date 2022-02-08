import { useState, useEffect } from 'react'
import { isValidPhoneNumber } from 'libphonenumber-js'

import * as yup from 'yup'

export const useValidEmail = (initialValue: string) => {
  const [email, setEmail] = useState(initialValue)
  const [emailIsValid, setEmailIsValid] = useState(true)

  useEffect(() => {
    const emailSchema = yup.object().shape({
      email: yup.string().email().required(),
    })

    if (email.length === 0) {
      setEmailIsValid(true)
      return
    }

    const isValid = emailSchema.isValidSync({ email })

    setEmailIsValid(isValid)
  }, [email])

  return { email, setEmail, emailIsValid }
}

export const useValidPhoneNumber = (initialValue: string) => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue)
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true)

  useEffect(() => {
    if (phoneNumber.length === 0) {
      setPhoneNumberIsValid(true)
      return
    }

    const isValid = isValidPhoneNumber(phoneNumber, 'AE')

    setPhoneNumberIsValid(isValid)
  }, [phoneNumber])

  return { phoneNumber, setPhoneNumber, phoneNumberIsValid }
}

export const useValidPassword = (initialValue: string) => {
  const [password, setPassword] = useState(initialValue)
  const [passwordIsValid, setPasswordIsValid] = useState(true)

  useEffect(() => {
    const passwordSchema = yup.object().shape({
      password: yup.string().min(8).required(),
    })

    if (password.length === 0) {
      setPasswordIsValid(true)
      return
    }

    const isValid = passwordSchema.isValidSync({ password })

    setPasswordIsValid(isValid)
  }, [password])

  return { password, setPassword, passwordIsValid }
}

export const useValidGivenName = (initialValue: string) => {
  const [givenName, setGivenName] = useState(initialValue)
  const [givenNameIsValid, setGivenNameIsValid] = useState(true)

  useEffect(() => {
    const givenNameSchema = yup.object().shape({
      givenName: yup.string().min(5).required(),
    })

    if (givenName.length === 0) {
      setGivenNameIsValid(true)
      return
    }

    const isValid = givenNameSchema.isValidSync({ givenName })

    setGivenNameIsValid(isValid)
  }, [givenName])

  return { givenName, setGivenName, givenNameIsValid }
}

export const useValidFamilyName = (initialValue: string) => {
  const [familyName, setFamilyName] = useState(initialValue)
  const [familyNameIsValid, setFamilyNameIsValid] = useState(true)

  useEffect(() => {
    const familyNameSchema = yup.object().shape({
      familyName: yup.string().min(8).required(),
    })

    if (familyName.length === 0) {
      setFamilyNameIsValid(true)
      return
    }

    const isValid = familyNameSchema.isValidSync({ familyName })

    setFamilyNameIsValid(isValid)
  }, [familyName])

  return { familyName, setFamilyName, familyNameIsValid }
}

export const useValidCode = (initialValue: string) => {
  const [code, setCode] = useState(initialValue)
  const [codeIsValid, setCodeIsValid] = useState(true)

  useEffect(() => {
    const codeSchema = yup.object().shape({
      code: yup.string().min(6).required(),
    })

    if (code.length === 0) {
      setCodeIsValid(true)
      return
    }

    const isValid = codeSchema.isValidSync({ code })

    setCodeIsValid(isValid)
  }, [code])

  return { code, setCode, codeIsValid }
}
