import React from 'react'
import { Container,Button } from 'react-bootstrap'
import "../styles/home.css"

const home = () => {
  return (
    <Container>
        <h1>Welcome to our website!</h1>
        <p>We are here to serve you</p>
        <Button variant='primary' type='submit'>Get Started</Button>
    </Container>
  )
}

export default home
