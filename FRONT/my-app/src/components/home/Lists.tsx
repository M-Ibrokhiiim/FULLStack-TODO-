import { useState,useEffect} from "react"
import { Box, Container, Text, Checkbox, Flex} from "@chakra-ui/react"
import Delete from '../../icons/Delete.tsx'
import Edit from "../../icons/Edit.tsx"

export default function LISTS({loading}){
    const [isChecked,setChecked] =useState(false)

    const [tasks,setTasks] = useState([])
    const checked=()=>{
        setChecked(!isChecked)
        console.log(isChecked)
    }

//  TASKS API
    const TASKS =async()=>{
        try{
            const response = await fetch('http://localhost:3000/tasks')
            const data = await response.json()
            setTasks(data)
            console.log(data)
        }catch(err){
          console.log('Error is occuring while loading tasks...')
        }
    }

    useEffect(()=>{
         TASKS()
    },[loading])
    return(
        <>
        <Box>
            <Container w={{base:'80vw',md:'50vw',lg:'30vw'}} mt={'50px'} border={'2px solid blue'} h={{base:'100vw',md:"60vw",lg:'30vw'}} borderRadius={'20px'}>
                <Text bg={'white'} textAlign={'center'} mt='3'  fontSize={'30px'} fontWeight={'800'} textDecoration={'underline'} color={'blue.600'} fontFamily={'cursive'}>
                    Tasks
                </Text>
                <Box bg='white' h={{base:'80%',lg:'85%'}} mt='20px' overflow={'scroll'}>
                    {tasks.map(task=>{
                        return(
                            <Flex mt='2'>
                    <Checkbox.Root cursor={'pointer'} w={{md:"450px"}}>
                        <Checkbox.HiddenInput    onChange={checked}/>
                        <Checkbox.Control cursor={'pointer'}/>
                        <Checkbox.Label fontSize={{base:'15px',md:'22px'}} textDecoration={isChecked ? 'line-through' :'none'}>{task.name}</Checkbox.Label> 
                    </Checkbox.Root>
                    <Flex  alignItems={'center'} w={'70px'} justifyContent={'space-between'}>
                        <Edit/>
                        <Delete/>
                    </Flex>
                  </Flex>
                        )
                    })}
                  
                </Box>
            </Container>
        </Box>
        </>
    )
}