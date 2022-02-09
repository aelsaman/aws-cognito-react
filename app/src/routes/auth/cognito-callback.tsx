import React, { useState, useEffect, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { AuthContext } from '../../contexts/authContext'

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  hover: {
    '&:hover': { cursor: 'pointer' },
  },
  text: {
    textAlign: 'center',
  },
})

export default function CogntioCallback() {
  const classes = useStyles()

  const history = useHistory()

  const authContext = useContext(AuthContext)

  // const sendCodeClicked = async () => {
  //   try {
  //     await authContext.sendCode(email)
  //     setResetSent(true)
  //   } catch (err) {
  //     setError('Unknown user')
  //   }
  // }

  useEffect(() => {
    console.log('window.location.href .... ', window.location.href)
    // not working
    // console.log('window.location.search .... ', window.location.search)
  }, [])

  return (
    <Grid className={classes.root} container direction="row" justify="center" alignItems="center">
      <Grid xs={11} sm={6} lg={4} container direction="row" justify="center" alignItems="center" item>
        <Paper style={{ width: '100%', padding: 32 }}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Box m={2}>
              <Typography variant="h3">Cognito Callback</Typography>
            </Box>

            <Box m={2}>
              <Typography variant="h6">This is the redirect page after successfull sign-in</Typography>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
