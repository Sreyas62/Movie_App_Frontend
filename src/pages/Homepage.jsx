import React from 'react'
import { Box, Button, Text,Image, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
function Homepage() {
    const nav = useNavigate()
    
  return (
    <>
    <Box>
        <Heading textAlign={"center"} padding={"1em"}>Movie Dashboard</Heading>
        <Text textAlign={"center"} px={{base:10,md:'10em'}}>Introducing the Movie Watchlist Manager – a versatile application designed to help you organize your movie-watching experience like never before. With the ability to add, delete, view, and update movie details, this app is your ultimate companion for keeping track of the movies you've watched and your personal reviews for each one. Easily add new movies to your watchlist, provide your thoughts on each movie, and keep your list up to date by editing movie details. Whether you're a casual movie-goer or a passionate cinephile, the Movie Watchlist Manager is the perfect tool to curate and manage your movie journey.</Text>
        <Flex justify={'center'} pt={5}><Button colorScheme='purple' onClick={()=>{nav('/movies')}}>Movies</Button></Flex>
        <Flex align={'center'} justify={'center'}><Image src={'img.jpg'} alt={"Movie"} h={{base:'15em',md:'25em'}} w={{base:'20em',md:'30em'}}></Image></Flex>
    </Box>
    </>
  )
}

export default Homepage