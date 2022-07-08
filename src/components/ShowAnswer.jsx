import React, { useContext, useEffect } from 'react'
import { globleData } from '../context/Contexts'
import {useParams} from "react-router"
//import Data from "../answers.json"
import {
            Table,
            Thead,
            Tbody,
            Tfoot,
            Tr,
            Th,
            Td,
            TableCaption,
            TableContainer,
            Box,
            Heading
          } from '@chakra-ui/react'
import axios from 'axios';

export default function ShowAnswer() {

  //this is the useContext 
  const {data, setData, answer, setAnswer, store, setStore} = useContext(globleData);
  
  //It is the hook to invoke the getData function
  useEffect(()=>{
    getData()
  },[])

  //this function is used to fetch the data from the API
  const getData = async() =>{
     const res = await axios.get("http://localhost:3001/answers")
     setStore(res.data)
  }

  return (
    <Box w="260px" ml="500px"  >
   <TableContainer>
  <Box h="400px">
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr >
        <Th ><Heading>Answers</Heading></Th>
      </Tr>
    </Thead>
    <Tbody>
    {
            // here I am mapping the answers
            store.map((e)=>(
            <Tr>
             <Td> *  {e.answer}</Td>
            </Tr>
            ))
      }
     
    </Tbody>
    <TableCaption fontSize="md" color="grey">Thank you for attending exam</TableCaption>
  </Table>
  </Box>
</TableContainer>
    </Box >
  )
}
