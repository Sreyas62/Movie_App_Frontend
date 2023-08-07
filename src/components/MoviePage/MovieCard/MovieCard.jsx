import React, { useRef, useState } from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteMovies, updateMovies } from '../../../Redux/movies/movie.actions'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
  
function MovieCard({title,image,body,rating,user,_id}) {

  const dispatch = useDispatch()
  const [movies, setMovies] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [temptitle, setTitle] = useState(title)
    const [tempimage, setImage] = useState(image)
    const [tempbody, setBody] = useState(body)
    const [temprating, setRating] = useState(rating)

    const updateMovie = () => {
        dispatch(updateMovies(_id,{title:temptitle,image:tempimage,body:tempbody,rating:temprating}))
        onClose()
    }

  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        h={'350px'}
        overflow={"auto"}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
         
        >
        <Box h={'150px'}  mt={-6} mx={-6} mb={6} >
          <Image
          rounded={'md'}
            src={image}
            objectFit={'cover'}
            alt="Example"
          />
        </Box>
        <Stack>
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'}>
            {body}
          </Text>
          <Text color={'gray.500'}>
            Rating : {rating}/10
          </Text>
        </Stack>
        <Stack direction={'row'} justify={'space-between'} pt={4}>
        
        <>
        <Button onClick={onOpen}>Update</Button>

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
              <Input value={temptitle} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input value={tempimage} placeholder='URL' onChange={(e)=>setImage(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea value={tempbody} placeholder='description' onChange={(e)=>setBody(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your rating</FormLabel>
              <Input value={temprating} placeholder='Out of 10' onChange={(e)=>setRating(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={updateMovie}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>





        <Button onClick={()=>
      dispatch(deleteMovies(_id))  
      }>
      Delete</Button>
        </Stack>
      </Box>
    </Center>
  )
}



export default MovieCard