import React, { useState } from 'react'
import { Button, Box, TextField, Typography } from '@mui/material'

import styles from '../styles/Home.module.css'

export default function Contact () {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <Box
      component='form'
      action='https://formspree.io/mbjlovdg'
      method='POST'
      onSubmit={(e) => handleSubmit(e)}
      sx={{ margin: '72px auto 0', maxWidth: 600 }}
    >
      <TextField
        margin='dense'
        required
        fullWidth
        name='name'
        label='Your name'
        id='name'
      />
      <TextField
        margin='dense'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
      />
      <TextField
        margin='dense'
        multiline
        rows={4}
        fullWidth
        id='message'
        label='Type your message'
        name='message'
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        className={styles.submitBtn}
      >
        Send message
      </Button>
      {status === 'SUCCESS' && <Typography sx={{ textAlign: 'center' }}>Thank you for your message!</Typography>}
      {status === 'ERROR' && <Typography sx={{ mt: 1, textAlign: 'center', color: '#CC3333' }}>Ooops! There was an error. Try again.</Typography>}
    </Box>
  )
}
