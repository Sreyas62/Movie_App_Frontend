import React from 'react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
function Homepage() {
    const location = useLocation()
  return (
    <>
    <Box>
        <Heading textAlign={"center"} padding={"1em"}>Movie Dashboard</Heading>
    </Box>
    </>
  )
}

export default Homepage