import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/button'
import { Box, Heading } from '@chakra-ui/layout'
export default function Start() {
  return (
    
    //this is just to home page to welcome message
    <Box  _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' p='6' rounded='md' bg='white'  w='100%' p={4} color='green' h="300px" w="500px" ml="350px" mt="20px">
      <Heading>Welcome to online examination</Heading>
      <Box mt="100px">
      <Link to="/Fetch">
      <Button bgColor="#68D391" color="white">START</Button>
      </Link>
      </Box>  
    </Box>
  )
}
