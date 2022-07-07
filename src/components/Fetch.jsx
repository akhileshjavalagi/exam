import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { globleData } from '../context/Contexts'
import ShowAnswer from './ShowAnswer';
import { Link } from 'react-router-dom';
import { Box, Center, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
export default function Fetch() {

  //this is the usecontext imported 
  const {data, setData, answer, setAnswer} = useContext(globleData);

  //this is the state to store the answers 
  const [text, setText] = useState({
    answer : ""
  });

  //const [data, setData] = useState([]);

  //this is the useeffect to invoke the function getData
  useEffect(()=>{
     getData()
  },[])

  //this function is to fetch the data from the API
  const getData = async() =>{
       const res = await axios.get("http://localhost:3001/questions");
       setData(res.data)
       //console.log(res.data)
  }

  //this is the function to store the value of the radio button
  const handleChange = (e) =>{
      const {id, value} = e.target
      setText({...text, [id] : value})
  }

 //this is the state which is taken because of incrementing the "n" to find the particular question
 const [n, setN] = useState(1)
  
  //this is the function to go to the next question after answering the current question
  const nextquestion = () =>{  

        //here I am putting the condition to stop the incrementing the n value
        //comparing with the data which is coming from the API

        if(n>data.length){
         alert("exam completed Successfully")
        }else{

          //here I am incrementing
          setN(n+1)
        }

        //here I am posting the answers to the json
        axios.post("http://localhost:3001/answers",text)
}

     
  return (
    <Box>
    <Heading size="lg" color="green">Please choose correct answer</Heading>
    
    <Box _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' p='6' rounded='md' bg='white'  w='100%' p={4}  h="300px" w="500px" ml="370px" mt="20px">
    
     {
          // here I am doing conditional rendering
          // I am comparing the n with the questionid which is in the josn data
          // If it matches then it should display the question
          data.map((e)=>(
            e.questionid === n  ? 
            <Box>
              <Box ml="50px" display="Flex" alignItems="center"gap="10px">
              <Heading size="md" color="#ED8936">Question</Heading>
              <Heading size="lg"> : {e.question}</Heading>
              </Box> 

              {/* here I am mapping the questionoptions to display */}
              {e.questionoption.map((el)=>(
                
                <Box mt="20px" display="Flex" ml="50px">
                  {/* this is the radio input to store the answers */}
                   <input type="radio" id="answer" value={el.optionvalue} onChange={handleChange}/><p style={{marginLeft:"10px"}}>{el.optionvalue}</p>
                </Box>
              ))}
            </Box>
            : console.log("false")
          ))
     }
     <Box mt="30px">
      
      {/* this button is for go to the next question */}
     <Button w="80px" bgColor="#F6AD55" onClick={nextquestion}>next</Button>

     {/* this button is for finish the exam and showing the answers */}
     <Link to="/answer">
     <Button w="80px" bgColor="#F6AD55" ml="10px">Finish</Button>
     </Link>
     </Box>
    </Box>
    </Box>
  )
}

