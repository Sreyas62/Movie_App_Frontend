import { Box, Button, FormControl, FormLabel, Grid, IconButton, Input, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import MovieCard from '../components/MoviePage/MovieCard/MovieCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createMovies, getMovies } from '../Redux/movies/movie.actions'
import { BsPlusLg } from 'react-icons/bs'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function MoviesPage() {
    const dispatch = useDispatch()
    const {loading,error,data} = useSelector((state) => state.movieReducer)
    console.log(data)
    const token = useSelector((state) => state.userReducer.token)
    const [movies, setMovies] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState('')

    const addMovie = () => {
        dispatch(createMovies({title,image,body,rating}))
        onClose()
    }


    useEffect(() => {
        dispatch(getMovies())
        localStorage.setItem('token', token);
    }, [])

    useEffect(() => {
        setMovies(data)
    }, [data])
        
  return (
    <Box padding={8}>

        <Grid w={'100%'} gridTemplateColumns={{base:"none",md:'repeat(4,1fr)'}}>
            {movies?.map((el)=> <MovieCard key={el._id} {...el} />)}
        </Grid>

    
    <>
    <IconButton position={"fixed"} w={{base:"16",md:'5%'}} h={{base:"16",md:'10%'}} bottom={0} right={0} margin={{base:4,md:16}} rounded={100}
    onClick={() => {
        onOpen()
    }} icon={<BsPlusLg/>}
    >

    </IconButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add the movie details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Movie title</FormLabel>
              <Input value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input value={image} placeholder='URL' onChange={(e)=>setImage(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea value={body} placeholder='description' onChange={(e)=>setBody(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your rating</FormLabel>
              <Input value={rating} placeholder='Out of 10' onChange={(e)=>setRating(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={addMovie}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    </Box>
  )
}

export default MoviesPage