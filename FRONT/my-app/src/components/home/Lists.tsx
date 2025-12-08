import { useState,useEffect} from "react"
import { Box, Container, Text, Checkbox, Flex} from "@chakra-ui/react"
import Delete from '../../icons/Delete.tsx'
import Edit from "../../icons/Edit.tsx"

export default function LISTS({loading,setLoading}){
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
    
    const taskIsDone = async(id:number)=>{
        try{
            const response = await fetch(`http://localhost:3000/task/${id}/done`,{
                method:'PUT'
            });

            if(!response.ok){
                throw new Error("Error!")
            }
            TASKS();

            const data = response.json();
            console.log(data)
        }catch(err){
           console.log(err)
        }
    }

    useEffect(()=>{
         TASKS()
    },[loading])
    return(
        <>
        <Box>
            {tasks.length >0 ? <Container w={{base:'85vw',md:'50vw',lg:'30vw'}} mt={'50px'} border={'2px solid blue'} h={{base:'100vw',md:"60vw",lg:'30vw'}} borderRadius={'20px'}>
                <Text bg={'white'} textAlign={'center'} mt='3'  fontSize={'30px'} fontWeight={'800'} textDecoration={'underline'} color={'blue.600'} fontFamily={'cursive'}>
                    Tasks
                </Text>
                <Box h={{base:'70%',lg:'80%'}} mt='20px' overflow={'scroll'} bg='red' display={'flex'} flexDirection={'column'}>
                    {tasks.map(task=>{
                        return(
                            <Flex mt='2'  justifyContent={'space-between'}>
                    <Checkbox.Root cursor={'pointer'} overflow={'scroll'} w={{base:"200px", md:"450px"}} onClick={()=>{taskIsDone(task.id)}}>
                         <input type="checkbox" style={{width:"30px",height:"20px"}} checked={task.isDone}/>
                        <Checkbox.Label fontSize={{base:'15px',md:'22px'}} textDecoration={task.isDone ? 'line-through' :'none'}>{task.name}</Checkbox.Label> 
                    </Checkbox.Root>
                    <Flex  alignItems={'center'} w={'70px'} bg='white' justifyContent={'space-between'}>
                        <Edit/>
                        <Delete id={task.id} setLoading={setLoading} loading={loading}/>
                    </Flex>
                  </Flex>
                        )
                    })}
                  
                </Box>
            </Container>
            :'' }
            
        </Box>
        </>
    )
}