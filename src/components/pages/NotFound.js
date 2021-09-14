import React from "react"
import { Container, Typography } from "@material-ui/core"

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Not Found
      </Typography>
      <p>The page you are looking for does not exist...</p>
    </Container>
  )
}

export default NotFound
