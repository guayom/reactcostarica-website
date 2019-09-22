import React from 'react'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { styled } from '@material-ui/styles'

const FooterLink = styled(Link)({
  margin: 4,
})

export default function Footer() {
  return (
    <Box
      component="footer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
    >
      <Box component="nav" display="flex" alignItems="center">
        <FooterLink href="https://github.com/reactcostarica">GitHub</FooterLink>
        <FooterLink href="https://twitter.com/reactcostarica">
          Twitter
        </FooterLink>
      </Box>

      <Link color="textSecondary" href="mailto:hola@reactcostarica.com">
        hola@reactcostarica.com
      </Link>
    </Box>
  )
}
